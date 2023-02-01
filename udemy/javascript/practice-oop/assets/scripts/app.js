class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    //자기 자신을 복제하여 새로운 element를 만들어서 이벤트를 가비지컬렉션으로 보냄
    return clonedElement;
  }
  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    this.hostElement = hostElementId ? document.getElementById(hostElementId) : document.body;
    this.insertBefore = insertBefore;
  }

  detach = () => {
    if (this.element) {
      this.element.remove();
    }
  };

  attach() {
    this.hostElement.insertAdjacentElement(this.insertBefore ? "afterbegin" : "beforeend", this.element);
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunction, tooltipText, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.tooltipText = tooltipText
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipEl = document.createElement("div");
    tooltipEl.className = "card";
    tooltipEl.textContent = this.tooltipText;
    tooltipEl.addEventListener("click", this.closeTooltip);
    this.element = tooltipEl;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoBtn();
    this.connectSwitchBtn(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    const tooltip = new Tooltip(() => (this.hasActiveTooltip = false), tooltipText, this.id);
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoBtn() {
    const prjItemEL = document.querySelector(`#${this.id}`);
    const moreInfoBtn = prjItemEL.querySelector("button:first-of-type");
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));
  }

  connectSwitchBtn(type) {
    const prjItemEL = document.querySelector(`#${this.id}`);
    let switchBtn = prjItemEL.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";
    switchBtn.addEventListener("click", this.updateProjectListsHandler.bind(null, this.id), type);
  }

  update(updateProjectListsFunction, type) {
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectSwitchBtn(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));
    }
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    this.projects = this.projects.filter((p) => {
      if (p.id === projectId) {
        this.switchHandler(p);
        return false;
      }
      return true;
    });
  }
}

// app rendering
class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    activeProjectsList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
    finishedProjectList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
  }
}

App.init();
