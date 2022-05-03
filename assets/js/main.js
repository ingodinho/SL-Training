'use strict';


const players = [
    { pos: "tw", firstName: "Johnny", lastName: "Oltmanns", team: "1" },
    { pos: "li", firstName: "Uwe", lastName: "Siemens", team: "1" },
    { pos: "md", firstName: "Michael", lastName: "Nordbrock", team: "1" },
    { pos: "md", firstName: "Carl", lastName: "Freimuth", team: "1" },
    { pos: "vs", firstName: "Jannes", lastName: "Utecht", team: "1" },
    { pos: "dm", firstName: "Andreas", lastName: "Braun", team: "1" },
    { pos: "lm", firstName: "Matthias", lastName: "Schgaup", team: "1" },
    { pos: "rm", firstName: "Thomas", lastName: "Luenemann", team: "1" },
    { pos: "sm", firstName: "Jens", lastName: "Boettcher", team: "1" },
    { pos: "st", firstName: "Ingo", lastName: "Siemens", team: "1" },
    { pos: "st", firstName: "Timo", lastName: "Heiten", team: "1" },
    { pos: "li", firstName: "Stefan", lastName: "Haneberg", team: "2" },
    { pos: "md", firstName: "Aaron", lastName: "Buescher", team: "2" },
    { pos: "lm", firstName: "Joschka", lastName: "Buescher", team: "2" },
    { pos: "lm", firstName: "Thilo", lastName: "Kettwig", team: "2" },
    { pos: "st", firstName: "Tammo", lastName: "Buss", team: "2" },
  ];
  
  const team1 = players.filter((x) => x.team === "1");
  const team2 = players.filter((x) => x.team === "2");
  const team3 = players.filter((x) => x.team === "3");
  const twPos = players.filter((x) => x.pos === "tw");
  const mdPos = players.filter((x) => x.pos === "md");
  const liPos = players.filter((x) => x.pos === "li");
  const vsPos = players.filter((x) => x.pos === "vs");
  const dmPos = players.filter((x) => x.pos === "dm");
  const lmPos = players.filter((x) => x.pos === "lm");
  const rmPos = players.filter((x) => x.pos === "rm");
  const smPos = players.filter((x) => x.pos === "sm");
  const stPos = players.filter((x) => x.pos === "st");
  
  const labelPlayers = document.querySelector(".grid-teams");
//   const btnTeam1 = document.querySelector(".btn-team1");
//   const btnTeam2 = document.querySelector(".btn-team2");
//   const btnTeam3 = document.querySelector(".btn-team3");
  
  const showPlayers = function (team) {
    labelPlayers.innerHTML = "";
  
    team.forEach(function (player) {
      const html = `<div class="flex_item"><div class="flex-position">${player.pos}</div> <div class="flex-player">${player.firstName.slice(0,1)}. ${player.lastName} </div></div>`;
      labelPlayers.insertAdjacentHTML("beforeend", html);
    });
  };

    showPlayers(team1);
  
//   btnTeam1.addEventListener("click", function (e) {
//     e.preventDefault();
//     // labelPlayers.style.display = 'grid';
//     showPlayers(team1);
//   });
  
//   btnTeam2.addEventListener("click", function (e) {
//     e.preventDefault();
//     showPlayers(team2);
//   });
  
//   btnTeam3.addEventListener("click", function (e) {
//     e.preventDefault();
//     showPlayers(team3);
//   });
  