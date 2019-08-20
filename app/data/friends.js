//   ---------    holds all of the friends and their properties;

var friendsArray = [
    {
        name: "Jonathan Reid",
        photo: "https://pbs.twimg.com/profile_images/1056435484979748864/nTZxzBEP_400x400.jpg",
        scores :[5,1,4,4,5,1,2,5,4,1]
    },
    {
      name: "Chloe Price",
      photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e742dbfa-0b36-4015-a746-450bf1635864/dbmkihd-06dce4ef-b2a8-41eb-b3bb-ab74e5964a24.jpg/v1/fill/w_1024,h_724,q_75,strp/chloe_price_by_paularized_dbmkihd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI0IiwicGF0aCI6IlwvZlwvZTc0MmRiZmEtMGIzNi00MDE1LWE3NDYtNDUwYmYxNjM1ODY0XC9kYm1raWhkLTA2ZGNlNGVmLWIyYTgtNDFlYi1iM2JiLWFiNzRlNTk2NGEyNC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.SZCFM9G1OzbczJVOYd-z0XwXMCyJBo7Angc5e4B2wwE",
      scores : [4,2,5,1,2,3,4,2,3,1]
    },
    {
      name: "Ethan Mars",
      photo: "https://cdn.staticneo.com/w/heavyrain/thumb/9/98/EthanMars2011.jpg/400px-EthanMars2011.jpg",
      scores : [1,1,1,1,1,1,1,1,1,1]
    },
    {
      name: "Max Caulfield",
      photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e65e21bd-dc77-499e-962a-fa13cab37fc2/d8i2u8i-c4b21e14-70ec-4e8f-9c6e-caefaf9dbedf.jpg/v1/fill/w_894,h_894,q_70,strp/max_caulfield_by_kuvshinov_ilya_d8i2u8i-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvZTY1ZTIxYmQtZGM3Ny00OTllLTk2MmEtZmExM2NhYjM3ZmMyXC9kOGkydThpLWM0YjIxZTE0LTcwZWMtNGU4Zi05YzZlLWNhZWZhZjlkYmVkZi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.aqNuxe_jZd4kZt0ogwIOrJBMoNltINBwDEjAir9cymU",
      scores : [5,5,5,5,5,5,5,5,5,5]
    },
    {
      name: "Gabriel Belmont",
      photo: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/922441a8-1546-433c-bf0b-6f02f9ee6d87/d91khs5-f0127ceb-d500-45c4-9296-06af5730c032.jpg/v1/fill/w_1023,h_614,q_75,strp/gabriel_dracula_by_lucasrex_d91khs5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6IlwvZlwvOTIyNDQxYTgtMTU0Ni00MzNjLWJmMGItNmYwMmY5ZWU2ZDg3XC9kOTFraHM1LWYwMTI3Y2ViLWQ1MDAtNDVjNC05Mjk2LTA2YWY1NzMwYzAzMi5qcGciLCJ3aWR0aCI6Ijw9MTAyMyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5q4T7VvHxPt_-bqSsVnWLOaa2UbO4amLDq2HqTcOFBg",
      scores : [3,3,3,3,3,3,3,3,3,3]
    }
  ];


// var newFriend = {
//   name: "this Friend",
//   photo: "thisphoto.jpg",
//   scores: [
//     3,4,5,2,2,3,4,2,1,4
//   ]
// }


// -----------    exports the array
  module.exports = friendsArray;