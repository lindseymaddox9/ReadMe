function licenseBadge(license){
  if(license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license === "Apache"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else {
    return ''
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {

  return `# ${responses.title}

${licenseBadge(responses.License)}

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Tests](#Tests)
- [Questions](#Questions)


## <a name="Description"></a>Description
${responses.description}

## <a name="Installation"></a>Installation
${responses.Installation}

## <a name="Usage"></a>Usage
${responses.Usage}

## <a name="Contributing"></a>Contributing
${responses.contributing}

## <a name="Tests"></a>Tests
${responses.tests}

## <a name="Questions"></a>Questions

Email: ${responses.Questions}
`;
}

module.exports = generateMarkdown;
