function toggleLoginSection5() {
    const loginSection = document.getElementById("login");
    if (loginSection.style.display === "none" || loginSection.style.display === "") {
      loginSection.style.display = "block";
    } else {
      loginSection.style.display = "none";
    }
  }
  
  function toggleLoginSection() {
    const topicsSection = document.getElementById("topics");
    if (topicsSection.style.display === "none" || topicsSection.style.display === "") {
        topicsSection.style.display = "block";
    } else {
        topicsSection.style.display = "none";
    }
  }

    
  function toggleLoginSection1() {
    const topicsSection = document.getElementById("topics1");
    if (topicsSection.style.display === "none" || topicsSection.style.display === "") {
        topicsSection.style.display = "block";
    } else {
        topicsSection.style.display = "none";
    }
  }
  function toggleLoginSection3() {
    const topicsSection = document.getElementById("topics3");
    if (topicsSection.style.display === "none" || topicsSection.style.display === "") {
        topicsSection.style.display = "block";
    } else {
        topicsSection.style.display = "none";
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach(item => {
      const question = item.querySelector(".question");
      const answer = item.querySelector(".answer");
      const plus = item.querySelector(".bi-plus");
      const dash = item.querySelector(".bi-dash");
  
      question.addEventListener("click", function() {
        const isAnswerVisible = answer.classList.contains("show");
        answer.classList.toggle("show");
        answer.style.display = isAnswerVisible ? 'none' : 'block';
        dash.style.display = isAnswerVisible ? 'none' : 'block';
        plus.style.display = isAnswerVisible ? 'block' : 'none';
        cross.style.display = isAnswerVisible ? 'none' : 'block';
      });
    });
  });