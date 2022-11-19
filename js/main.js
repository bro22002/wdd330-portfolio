const links = [
    {
        label: "week1 notes",
        url: "week1/index.html",
    },
    {
        label: "week2 notes",
        url: "week2/index.html"
    },
    {
        label: "week3 notes",
        url: "week3/index.html"
    },
    {
        label: "week4 notes",
        url: "week4/index.html"
    },
    {
        label: "week5 notes",
        url: "week5/index.html"
    },
    {
        label: "challenge one",
        url: "challenge1/index.html"
    },
    {
        label: "week7 notes",
        url: "week7/index.html"
    },
    {
        label: "week8 notes",
        url: "week8/index.html"
    },
    {
        label: "week9 notes",
        url: "week9/index.html"
    },
    {
        label: "week10 notes",
        url: "week10/index.html"
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