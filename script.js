// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);
// $(function() {
//   function resetAll(event) {
//     $("button:not('#reset')").prop("disabled", false)
//       .removeClass("disabled")
//       .addClass("enabled");
//   }

//   function disableButton(obj) {
//     $(obj).prop("disabled", true).toggleClass("enabled disabled");
//   }

//   resetAll();

//   $("button:not('#reset')").click(function(event) {
//     if ($(".switch > input[type='checkbox']").is(":checked")) {
//       if ($(this).is("#TNA")) {
//         resetAll();
//         disableButton("#asset, #iitpl, #Ring Applicator");
       
//       }
//       if ($(this).is("#asset")) {
//         resetAll();
//         disableButton("#TNA, #iitpl, #Ring Applicator");
       
//       }
//       if ($(this).is("#iitpl")) {
//         resetAll();
//         disableButton("#TNA, #asset, #Ring Applicator");
       
//       }
//       if ($(this).is("#Ring Applicator")) {
//         resetAll();
//         disableButton("#TNA, #asset, #iitpl");
       
//       }
//     } else {
//       disableButton(this);
//     }
//   });

//   $("#reset").click(resetAll);
// });