"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "db_projects",
      [
        {
          title: "i wanna be a fullstack developer",
          start_date: "2023-08-31",
          end_date: "2023-10-31",
          description:
            "Full stack developer adalah seseorang yang dimana bertanggung jawab dalam memperbaiki front - end dan back - end dari sebuah aplikasi. Seorang full stack developer dituntut untuk dapat menguasai kedua bidang tersebut. Secara garis besar mereka yang menjadi full stack developer wajib menguasai javascript, php, database, java (backend) dan juga dapat mengkoordinasikan desain ke dalam pemrograman seperti HTML, CSS, XML(front end).",
          image: "https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
