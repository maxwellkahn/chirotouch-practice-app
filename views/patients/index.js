import { LitElement, html } from "lit";

const VisibilityFilters = {
  SHOW_ALL: "All",
  SHOW_ACTIVE: "Active",
  SHOW_PAST: "Past",
};

class PatientIndex extends LitElement {
  static get properties() {
    return {
      patients: { type: Array },
      filter: { type: String },
    };
  }

  constructor() {
    super();
    this.patients = [];
    this.filter = VisibilityFilters.SHOW_ALL;
  }

  render() {
    return html`<p>Patient index</p>
      <p></p>`;
  }
}

customElements.define("patient-index", PatientIndex);
