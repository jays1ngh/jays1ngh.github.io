
//  select all h2 tags in class post-detail
var headings = document.querySelectorAll(".post-detail h2");

headings.forEach (function(heading) {

    // ************************
    // Create Table of contents
    // ************************

    // select element with ID toc
    const toc = document.getElementById("toc");
    // select the ID attribute of heading
    const headingsAtrb = heading.attributes.id.textContent;
    // create heading link with # 
    const headingLink= "#" + headingsAtrb;
    // select the header
    const tocHeading = heading.innerHTML;
    // create toc list
    const tocListItem = document.createElement("li");
    // create new "a" element
    const tocEntry = document.createElement("a");

    // set attributes of "a" element
    tocEntry.setAttribute("href",headingLink);
    tocEntry.innerText = tocHeading;

    // append tocListItem
    tocListItem.appendChild(tocEntry);

    // append toc div with the required information
    toc.appendChild(tocListItem);

    // **************************
    // Create anchors for h2 tags
    // **************************
    const anchorIcon = '<i class="fas fa-link"></i>';
    anchor = document.createElement("a");
    anchor.className = 'anchor-link';
    anchor.href = headingLink;
    // Use if only want to display alpanumeric characters
    // anchor.innerText = "#"
    anchor.innerHTML = (anchorIcon);
    heading.appendChild(anchor);
});
