import PropTypes from "prop-types";
import { get } from "lodash";

import { getLogger } from "../../utils/logger";
import templates from "../CertificateTemplates";

const { trace } = getLogger("components:CertificateViewer");

const FramelessCertificateViewer = props => {
  const { certificate } = props;

  const selectedTemplateName = get(certificate, "$template", "default");
  const SelectedTemplate = templates[selectedTemplateName] || templates.default;

  trace(`Templates Mapping: %o`, templates);
  trace(`Selected template: ${selectedTemplateName}`);
  trace(`Certificate content: %o`, certificate);

  return <SelectedTemplate />;
};

FramelessCertificateViewer.propTypes = {
  handleCertificateChange: PropTypes.func,
  document: PropTypes.object,
  certificate: PropTypes.object
};

export default FramelessCertificateViewer;
