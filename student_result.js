firebase.auth().onAuthStateChanged(async (user) => {
  if (!user) {
    alert("Please login to view results.");
    window.location.href = "index.html";
    return;
  }

  const loader = document.getElementById("loader");
  const resultBox = document.getElementById("resultBox");
  const scoreValue = document.getElementById("scoreValue");
  const remarks = document.getElementById("remarks");

  try {
    const snap = await db.collection("aptitudeScores")
      .where("studentId", "==", user.uid)
      .orderBy("createdAt", "desc")
      .limit(1)
      .get();

    loader.style.display = "none";
    resultBox.style.display = "block";

    if (snap.empty) {
      scoreValue.textContent = "0%";
      remarks.textContent = "No test found. Please take a test first.";
      return;
    }

    const data = snap.docs[0].data();
    const score = (data.score || 0) * 10;

    scoreValue.textContent = `${score}%`;

    if (score >= 80) {
      remarks.textContent = "Excellent performance! 🌟 You’re on the right track.";
    } 
    else if (score >= 60) {
      remarks.textContent = "Good job! Keep improving 💪";
    } 
    else {
      remarks.textContent = "Needs improvement. Try again after preparation. 📘";
    }

  } catch (err) {
    console.error(err);
    alert("Error loading results: " + err.message);
  }
});

function logout() {
  auth.signOut().then(() => {
    alert("Logged out successfully!");
    window.location.href = "index.html";
  });
}

function goToDashboard() {
  window.location.href = "student_dashboard.html";
}
