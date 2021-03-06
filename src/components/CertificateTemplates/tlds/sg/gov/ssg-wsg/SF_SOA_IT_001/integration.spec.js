import { Selector } from "testcafe";

fixture("ROPSTEN : Skillsfuture Singapore").page`http://localhost:3000`;

const Certificate = "./SF_SOA_IT_001.opencert";

const TemplateTabList = Selector("#template-tabs-list");
const RenderedCertificate = Selector("#rendered-certificate");

const validateTextContent = async (t, component, texts) =>
  texts.reduce(
    async (prev, curr) => t.expect(component.textContent).contains(curr),
    Promise.resolve()
  );

test("SFSOAIT001 certificate is rendered correctly", async t => {
  // Uploads certificate via dropzone
  await t.setFilesToUpload("input[type=file]", [Certificate]);

  // Certificate tabs rendered
  await t.expect(TemplateTabList.textContent).contains("Certificate");

  // Certificate tab content
  await validateTextContent(t, RenderedCertificate, [
    "STATEMENT OF ATTAINMENT",
    "is awarded to",
    "A",
    "ID No: S0000000A",
    "for successful attainment of the followingindustry approved competencies",
    "HR-PRB-503E-1 Develop strategies for total remuneration",
    "at SINGAPORE NATIONAL EMPLOYERS FEDERATION",
    "01 Dec 2018"
  ]);
});
