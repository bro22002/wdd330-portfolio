const links = [
    {
        label: "week1 notes",
        url: "week1/index.html",
    }
];

function addContent(links) {
    const ol = document.querySelector("ol");
    links.forEach((links) => {
        let content = document.createElement('li');
        content.innerHTML = `${links.label}: <a href="${links.url}">${links.url}<a/>`;

        ol.appendChild(content);
    })
}

addContent(links);