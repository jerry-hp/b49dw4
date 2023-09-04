"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "db_projects",
      [
        {
          title: "instagram",
          author: 1,
          start_date: "2023-08-31",
          end_date: "2023-10-11",
          duration: "2 Bulan",
          content: `Instagram adalah sosial media berbasis gambar yang memberikan layanan berbagi foto atau video secara online. Instagram berasal dari pengertian dari keseluruhan fungsi aplikasi ini. Kata "insta" berasal dari kata "instan", seperti kamera polaroid yang pada masanya lebih dikenal dengan sebutan "foto instan".Instagram juga dapat menampilkan foto-foto secara instan, seperti polaroid didalam tampilannya. Sedangkan untuk kata "gram" berasal dari kata "telegram" yang cara kerjanya untuk mengirimkan informasi kepada orang lain dengan cepat. Samahalnya dengan Instagram yang dapat mengunggah foto dengan menggunakan jaringan Internet, sehingga informasi yang ingin disampaikan dapat diterimadengan cepat. Oleh karena itulah Instagram merupakan lakuran dari kata instan dan telegram.`,
          nodejs: true,
          reactjs: false,
          nextjs: false,
          typescript: false,
          image: "https://media.istockphoto.com/id/1483272796/id/foto/seminar-coding-berbicara.webp?b=1&s=170667a&w=0&k=20&c=bxe3d3-kg8LM9RkbA2HjyCroxkkak1p6q7ghLNsreZM=",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "to be a fullstack developer",
          author: 2,
          start_date: "2023-08-31",
          end_date: "2023-09-11",
          duration: "12 hari",
          content:
            "Full stack developer adalah seseorang yang dimana bertanggung jawab dalam memperbaiki front - end dan back - end dari sebuah aplikasi. Seorang full stack developer dituntut untuk dapat menguasai kedua bidang tersebut. Secara garis besar mereka yang menjadi full stack developer wajib menguasai javascript, php, database, java (backend) dan juga dapat mengkoordinasikan desain ke dalam pemrograman seperti HTML, CSS, XML(front end).",
          nodejs: true,
          reactjs: false,
          nextjs: true,
          typescript: false,
          image:
            "https://media.istockphoto.com/id/1439425791/id/foto/teknologi-digital-konsep-pengembangan-perangkat-lunak-pemrogram-pengkodean-bekerja-pada-laptop.webp?b=1&s=170667a&w=0&k=20&c=9ZY_VAoL5Tq_DSEa6AVX9iWsCQiSgHRr3oBnl80-nN8=",
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
