// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {

  return `# ${responses.title}


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
