export default {
  name: "post",
  title: "post",
  type: "document",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "author",
      type: "string",
      title: "author",
    },
    {
      name: "paragraph",
      type: "string",
      title: "paragraph",
    },
    {
      name: "image",
      type: "image",
      title: "image",
    },
    {
      name:"slug",
      type:"slug",
      title:"product slug",
      options : {
          source : "title",
      }},
      {
        name: "publishDate",
        type: "date",
        title: "Publish Date",
      },
      {
        name: "readTime",
        type: "number",
        title: "Read Time (minutes)",
      },
  ],
};
