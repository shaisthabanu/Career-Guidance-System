// app.js
document.addEventListener("DOMContentLoaded", () => {
  const emailEl = document.getElementById("email");
  const passEl = document.getElementById("password");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignup = document.getElementById("btnSignup");
  const btnCollege = document.getElementById("btnCollege");

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Create user + save role in users collection + specific collection
  async function createUser(email, password, role) {
    if (!isValidEmail(email)) return alert("Please enter a valid email.");
    if (password.length < 6) return alert("Password must be 6+ characters.");

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // user record (central)
      await db.collection("users").doc(user.uid).set({
        email: user.email,
        role,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      // also create record in role-specific collection (optional)
      if (role === "student") {
        await db.collection("students").doc(user.uid).set({
          email: user.email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      } else if (role === "college") {
        await db.collection("colleges").doc(user.uid).set({
          email: user.email,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      }

      alert(`${role === "student" ? "Student" : "College"} account created!`);
      emailEl.value = ""; passEl.value = "";
    } catch (err) {
      alert(err.message);
    }
  }

  btnSignup.addEventListener("click", () => createUser(emailEl.value.trim(), passEl.value.trim(), "student"));
  btnCollege.addEventListener("click", () => createUser(emailEl.value.trim(), passEl.value.trim(), "college"));

  // Login: sign in and then read role from users collection and redirect
  btnLogin.addEventListener("click", async () => {
    const email = emailEl.value.trim();
    const password = passEl.value.trim();
    if (!isValidEmail(email)) return alert("Please enter a valid email.");
    if (!password) return alert("Please enter your password.");

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // fetch role
      const doc = await db.collection("users").doc(user.uid).get();
      if (!doc.exists) {
        alert("User record not found in Firestore. Contact admin.");
        return;
      }
      const role = doc.data().role;
      // nice success message then redirect
      alert(`Welcome back, ${user.email}!`);
      // small delay so alert shows
      setTimeout(() => {
        if (role === "student") window.location.href = "instructions.html";
        else if (role === "college") window.location.href = "college.html";
        else window.location.href = "dashboard.html";
      }, 700);
    } catch (err) {
      alert(err.message);
    }
  });

  // Optional: keep console logged
  auth.onAuthStateChanged(user => {
    if (user) console.log("User logged in:", user.email);
  });
});
