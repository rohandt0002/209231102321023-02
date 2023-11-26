// console.log("Hello World!");


// var state = {
//     taskList: [
//         {
//             imageUrl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//           {
//             imageUrl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//           {
//             imageUrl: "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         }
//     ] 
// }

var state = {
    taskList: []
};

// DOM Objects
var taskContents = document.querySelector(".task__contents");
var taskModal = document.querySelector(".task__modal__body");

// console.log(taskModal);

var htmlTaskContent = ({id, title, description, type, url}) => `
   <div class='col-md-6 col-lg-4 mt-3' id=${id} key=${id}>
        <div class='card shadow-sm task__card'>
            <div class='card-header d-flex justify-content-end task__card__header'>
              <button type="button" class="btn btn-outline-info mr-2" name="${id}">
                <i class="fas fa-pencil-alt" name=${id}></i>
              </button>
               <button type="button" class="btn btn-outline-danger mr-2" name="${id}">
                <i class="fas fa-trash-alt" name=${id}></i>
              </button>
            </div>
            <div class="card-body">
               ${
                url &&
                `<img width='100%' src=${url} alt='card image cap' class='card-img-top md-3 rounded-lg' />`
            }
            <h4 class="card-title">${title}</h4>
            <p class="description trim-3-lines text-muted data-gram_editor='false'">${description}</p>
            <div class="tags text-white d-flex flex-wrap">
              <span class="badge bg-primary m-1">${type}</span>
            </div>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>
            </div>
        </div>
    </div>
`;