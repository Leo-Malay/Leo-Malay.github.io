const blogData = [];

/**
    {
        index: 0,
        title: "",
        date: "",
        subtitle: "",
    }
 */

let temp = "";

let blogPost = (data) =>
    `<a class="col-12 col-lg-4 p-3 mt-3 text-decoration-none" href="/blog/${data?.index}.html">
                    <h4 class="fw-bold m-0">${data?.title}</h4>
                    <span class="small">${data?.date}</span>
                    <h6>${data?.subtitle}</h6>
                </a>`;

blogData.map((ele) => (temp += blogPost(ele)));

document.getElementById("blogList").innerHTML = temp;
