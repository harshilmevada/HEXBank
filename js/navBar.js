function initizlizeCode() {
  const profileIcon = document.getElementById("colorImg"); //change id colorImg to profileImg
  // const colorpicker = document.getElementById("colorPicker");

  if (profileIcon) {
    profileIcon.addEventListener("click", () => {
      document.getElementById("settings-overlay").style.display = "flex";
    });

    let lightMode = document.getElementById("light");

    let darkMode = document.getElementById("dark");
    $("#itemsIndex3").hide();
    let parsedData = JSON.parse(localStorage.getItem("usreData"));

    document.getElementById("close-btn").addEventListener("click", () => {
      document.getElementById("settings-overlay").style.display = "none";
    });

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems[0].classList.add("isSelected");
    let currentSelectedIndex = 0;

    menuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        menuItems.forEach((el) => el.classList.remove("isSelected")); // Remove from all
        item.classList.add("isSelected"); // Add to the clicked one
        currentSelectedIndex = index;

        if (currentSelectedIndex === 0) {
          $("#itemsIndex3").hide();
          $("#itemsIndex0").show();

          if (parsedData) {
            $("#userEmail").text("parsedData.aadhar");
            document.getElementById("userEmail").textContent =
              parsedData.aadhar;
            $("#userEmail").text(parsedData.aadhar);
            console.log(parsedData.pan);
          } else {
            console.log(parsedData.pan);
          }
        } else if (currentSelectedIndex === 2) {
          $("#itemsIndex0").hide();
          $("#itemsIndex3").show();
          document.getElementById("light").style.backgroundColor = "gray";
        document.getElementById("dark").style.backgroundColor = "#d2d2d2";
        }
      });
    });

    if (lightMode) {
      lightMode.addEventListener("click", () => {
        document.documentElement.classList.add("dark-mode");
        document.getElementById("light").style.backgroundColor = "#d2d2d2";
        document.getElementById("dark").style.backgroundColor = "gray";
      });
    } else {
      console.error("lightMode button not found!");
    }

    if (darkMode) {
      darkMode.addEventListener("click", () => {
        document.documentElement.classList.remove("dark-mode");
        document.getElementById("light").style.backgroundColor = "gray";
        document.getElementById("dark").style.backgroundColor = "#d2d2d2";
      });
    }
  } else {
    // requestAnimationFrame(initializeCode);
    setTimeout(initizlizeCode, 100);
  }
}

document.addEventListener("DOMContentLoaded", initizlizeCode);
