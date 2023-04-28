export const welcomeEmail = (user: any) => {
  const email = {
    from: "<nicolasrodriguezch@gmail.com>",
    to: user.email,
    subject: "Welcome",
    html: `<h1>Supp homes, u good? ${user.name}</h1>`,
    text: "Whatev",
    attachments: [{
      filename: 'text1.txt',
      content: `Buenas las tengas ${user.last_name}`
    }]
  };
  return email;
};
