// Database siswa dan link PDF
const siswaValid = [
    {
        nama: "1",
        nisn: "0063624784",
        pdfUrl: "https://drive.google.com/file/d/11PdQutBrifQy6RFHQw1Z6UkT8RSUjeeY/view"
    },
    {
        nama: "2",
        nisn: "0082904512",
        pdfUrl: "https://drive.google.com/file/d/13Bf0UfSvWah5_R2XsX3XVenTpTEMgG4y/view"
    },
    {
        nama: "3",
        nisn: "0095472442",
        pdfUrl: "https://drive.google.com/file/d/1YEf6BiPBhViV7tMtOJAyXRW7tNRwOQFT/view"
    },
    {
        nama: "4",
        nisn: "0088911046",
        pdfUrl: "https://drive.google.com/file/d/1mg4_XPDIVMZdB-OjnY0Hp7zG7P82CYfo/view"
    },
    {
        nama: "5",
        nisn: "0076811726",
        pdfUrl: "https://drive.google.com/file/d/139UYkQMiwhYgyB9ITXg8xQIEhHUdyTtk/view"
    },
    {
        nama: "6",
        nisn: "0077875572",
        pdfUrl: "https://drive.google.com/file/d/1GbS0YLVQPKICOgAHc_h-twT7i-tlN8gV/view"
    },
    {
        nama: "7",
        nisn: "0076743778",
        pdfUrl: "https://drive.google.com/file/d/1ZZPw0e0VNWpWNrna8eso_4W7tbeu-6rw/view"
    },
    {
        nama: "8",
        nisn: "0076876844",
        pdfUrl: "https://drive.google.com/file/d/19ro_4M8anVvS3YZ_AMPZNmuY1UttdXe_/view"
    },
    {
        nama: "9",
        nisn: "0083785219",
        pdfUrl: "https://drive.google.com/file/d/1tFCzmNG-KZsyPCPbil2lVcphxEx_oO-l/view"
    },
    {
        nama: "10",
        nisn: "0072577734",
        pdfUrl: "https://drive.google.com/file/d/19Utssnwff9uUYq11LBQuUY44xhZu3jkB/view"
    },
    {
        nama: "11",
        nisn: "0077020141",
        pdfUrl: "https://drive.google.com/file/d/1AZYj7gJ9r0uYOgTrIjyvl6i_Z9Sulne-/view"
    },
    {
        nama: "12",
        nisn: "0106433271",
        pdfUrl: "https://drive.google.com/file/d/1g1xvLeLlEAtO2WWFARB2zQKgzZ9y_1ag/view"
    },
    {
        nama: "13",
        nisn: "0088628373",
        pdfUrl: "https://drive.google.com/file/d/1QgKzXknCJMbVLmX4saQvgSXSzwYTe_GW/view"
    },
    {
        nama: "14",
        nisn: "0098487906",
        pdfUrl: "https://drive.google.com/file/d/130V3kFvdgeq6JY_WF1FGOPX7sGpHRP2v/view"
    },
    {
        nama: "15",
        nisn: "0074913957",
        pdfUrl: "https://drive.google.com/file/d/1aa5h5s4nR_vkmt0PGjotN-Hi9V6DJpzS/view"
    },
    {
        nama: "16",
        nisn: "0089264281",
        pdfUrl: "https://drive.google.com/file/d/1fBy6pVFbLPapDx0TgeQ6uWoUH_g-xLre/view"
    },
    {
        nama: "17",
        nisn: "3082775053",
        pdfUrl: "https://drive.google.com/file/d/1Slomd7pa2RNcSRtjAnhNMc0JWtzEKKpY/view"
    },
    {
        nama: "18",
        nisn: "0071521780",
        pdfUrl: "https://drive.google.com/file/d/19eY2VXzkySXsomdq7ZR0fmRaRHpdUH7U/view"
    },
    {
        nama: "19",
        nisn: "0025304927",
        pdfUrl: "https://drive.google.com/file/d/1fZnnzOYhn7yIW3agPV3sRDVfBiC06N4k/view"
    },
    {
        nama: "20",
        nisn: "0084633295",
        pdfUrl: "https://drive.google.com/file/d/16JnjIC06gYjnDu-BsunXG2gcyMYzvBx3/view"
    },
    {
        nama: "21",
        nisn: "0089910957",
        pdfUrl: "https://drive.google.com/file/d/1gb_XQ6hrMe1NHQWc1QFpvSweCRA0a6QN/view"
    },
    {
        nama: "22",
        nisn: "0089169124",
        pdfUrl: "https://drive.google.com/file/d/1A17kEYa5c2Wm5VcAicXpDujyZV0HNXio/view"
    },
    {
        nama: "23",
        nisn: "0088272099",
        pdfUrl: "https://drive.google.com/file/d/1o-A2No_yNXNY9FHV4PEWH2CP8UcljBPz/view"
    },
    {
        nama: "24",
        nisn: "0084978104",
        pdfUrl: "https://drive.google.com/file/d/1kYX3Eo-su3SQDgdrw7G3MlDgDOPDMSpA/view"
    },
    {
        nama: "25",
        nisn: "0088342818",
        pdfUrl: "https://drive.google.com/file/d/1KaF5iCJOa-XzoQ170u6aWFrneq2xIpqr/view"
    },
    {
        nama: "26",
        nisn: "0088748880",
        pdfUrl: "https://drive.google.com/file/d/1y3vjT7yCy8ACDFYi27KA--4oW7WUtn5L/view"
    },
    {
        nama: "27",
        nisn: "0075649675",
        pdfUrl: "https://drive.google.com/file/d/1BRWF7I4ZOarPT3pINuBMOncUsEQsdsNq/view"
    },
    {
        nama: "28",
        nisn: "0088759799",
        pdfUrl: "https://drive.google.com/file/d/1Czof8JY2ebBYc29hqTqQZ-D_IKsRS16x/view"
    },
    {
        nama: "29",
        nisn: "0088643808",
        pdfUrl: "https://drive.google.com/file/d/1-th2QBFrOLyhJIWBrjDRaIVMrjmBH2dg/view"
    },
    {
        nama: "30",
        nisn: "0084373076",
        pdfUrl: "https://drive.google.com/file/d/1TkN-U39MKYIKS5sNboboSKYMkSK1djS0/view"
    },
    {
        nama: "31",
        nisn: "0072303404",
        pdfUrl: "https://drive.google.com/file/d/1LLr8ChsYMGVzPzPe9q6bm9ouGS6iEpiq/view"
    },
    {
        nama: "32",
        nisn: "0078816629",
        pdfUrl: "https://drive.google.com/file/d/1s1__7sep44hwN_koG3aQQwyiIGePD9BX/view"
    },
    {
        nama: "33",
        nisn: "0075771159",
        pdfUrl: "https://drive.google.com/file/d/10AH7fhIEtW8PsfAKZZcEo1bf4XGR8vAg/view"
    },
    {
        nama: "34",
        nisn: "0087158292",
        pdfUrl: "https://drive.google.com/file/d/1Nd3aWNVsinstiEspqwHl_b5s8T4XMM7J/view"
    },
    {
        nama: "35",
        nisn: "0074578721",
        pdfUrl: "https://drive.google.com/file/d/1J7mhfCglh70yuG27MrT9uzuxwcXxzRr0/view"
    },
    {
        nama: "36",
        nisn: "0088665727",
        pdfUrl: "https://drive.google.com/file/d/1RPmCd1HYfMgks3XrlDb70LZPHLygPKSb/view"
    },
    {
        nama: "37",
        nisn: "0086029223",
        pdfUrl: "https://drive.google.com/file/d/1gYkaW3cGitZ_9rbPabHrp7d9DKHvObIW/view"
    },
    {
        nama: "38",
        nisn: "3087439979",
        pdfUrl: "https://drive.google.com/file/d/16TkNj8oRCsNaqWtUYDcQArsDUkFMhIA1/view"
    },
    {
        nama: "39",
        nisn: "0084201421",
        pdfUrl: "https://drive.google.com/file/d/1NMeVuuNqB7-Z35hod_lbmVxMaP_BhrbD/view"
    },
    {
        nama: "40",
        nisn: "0081940237",
        pdfUrl: "https://drive.google.com/file/d/10vropCzFcc3r8UDsS0O4QM5bWZRCMX9I/view"
    },
    {
        nama: "41",
        nisn: "0088113421",
        pdfUrl: "https://drive.google.com/file/d/16RUcXdFAzYIW7BGV9DJgxrzDhzUI3n_S/view"
    },
    {
        nama: "42",
        nisn: "3076056473",
        pdfUrl: "https://drive.google.com/file/d/1QYcet8X2c8Vky-OwfRQlAdvM0q_SlN2z/view"
    },
    {
        nama: "43",
        nisn: "0085728395",
        pdfUrl: "https://drive.google.com/file/d/11-XC0fmZ2L53wTP1RMCyLxK2DVcBkila/view"
    },
    {
        nama: "44",
        nisn: "0083459719",
        pdfUrl: "https://drive.google.com/file/d/1fHm2Tayeb14ExwXE3WcPR_r6rRH7WYyn/view"
    },
    {
        nama: "45",
        nisn: "0077480941",
        pdfUrl: "https://drive.google.com/file/d/1u0CRUBWYg9zayj6UqykCeqyRDk6g2uCN/view"
    },
    {
        nama: "46",
        nisn: "0086195296",
        pdfUrl: "https://drive.google.com/file/d/1XWua1cXfaM2yD5nMEEL5o78Z9t_10uKC/view"
    },
    {
        nama: "47",
        nisn: "0074863233",
        pdfUrl: "https://drive.google.com/file/d/1gKtuKfe9mBcRnZO7qzd5qBUhSyJTrKLC/view"
    },
    {
        nama: "48",
        nisn: "0085943306",
        pdfUrl: "https://drive.google.com/file/d/1SWCSs4hiCF_PZ0w9x6MVPMSESR4p6x21/view"
    },
    {
        nama: "49",
        nisn: "0077546763",
        pdfUrl: "https://drive.google.com/file/d/1Ymx-N0SNyf2elJFefPQrZ_TecDnmwGWQ/view"
    },
    {
        nama: "50",
        nisn: "0081509068",
        pdfUrl: "https://drive.google.com/file/d/1ZE5JPuQ54lIWCKMZrWwafKgocW3Me7HT/view"
    },
    {
        nama: "51",
        nisn: "0088420644",
        pdfUrl: "https://drive.google.com/file/d/1zeZOeTo71C0GGErlbVZjkmUjTVSuhiyS/view"
    },
    {
        nama: "52",
        nisn: "0085678895",
        pdfUrl: "https://drive.google.com/file/d/1YT-cNJIhZfAZnBGS1kkjTkw6pdM7M1JV/view"
    },
    {
        nama: "53",
        nisn: "0074769541",
        pdfUrl: "https://drive.google.com/file/d/1gVi4eW5W6HIcwgS03_CqpHFR0dO_Wj_-/view"
    },
    {
        nama: "54",
        nisn: "0087431925",
        pdfUrl: "https://drive.google.com/file/d/1w3iDqbWxJ_uu7D-FZCb8_i09K-HcjaFe/view"
    },
    {
        nama: "55",
        nisn: "0076192496",
        pdfUrl: "https://drive.google.com/file/d/1DoAhKi_DDhvDfckgOrbI57Mf_VXVW2SF/view"
    },
    {
        nama: "56",
        nisn: "0076459252",
        pdfUrl: "https://drive.google.com/file/d/1zsDIoYjjG9tw6-Ts5vMak2PjAHBbuUrb/view"
    },
    {
        nama: "57",
        nisn: "0084642351",
        pdfUrl: "https://drive.google.com/file/d/1309FRWvlWmasjRxmX3Qw9EgEGoYmlpMD/view"
    },
    {
        nama: "58",
        nisn: "0081545010",
        pdfUrl: "https://drive.google.com/file/d/1dmuL3uZmjXsbU5BFVLWo1T1yWa7BXmkj/view"
    },
    {
        nama: "59",
        nisn: "0085501626",
        pdfUrl: "https://drive.google.com/file/d/1du8MZF7S3VJyTD0ReL2RdQGCz_rHaIt8/view"
    },
    {
        nama: "60",
        nisn: "0078182610",
        pdfUrl: "https://drive.google.com/file/d/1FGSYkUwg8d6o9HolcwWrexOagZ_G7APT/view"
    },
    {
        nama: "61",
        nisn: "0088007514",
        pdfUrl: "https://drive.google.com/file/d/1y4QHgnkquX-QLEHebRZRO5vZDaqQly-T/view"
    },
    {
        nama: "62",
        nisn: "0073838739",
        pdfUrl: "https://drive.google.com/file/d/1mwvukzSZHuInGHUetvUqkGvEeGR_fYvZ/view"
    },
    {
        nama: "63",
        nisn: "0074131278",
        pdfUrl: "https://drive.google.com/file/d/1PnogSbrFcqgIwTOb1S9_Z9qx9mSbN5B8/view"
    },
    {
        nama: "64",
        nisn: "0077248915",
        pdfUrl: "https://drive.google.com/file/d/1dw9YtZ3Hy6q2FyjS-TM0VLcYuvI0aKhO/view"
    },
    {
        nama: "65",
        nisn: "0081717790",
        pdfUrl: "https://drive.google.com/file/d/10KeIEBx6Y-wdUGpEKLXQ8wpkilSLUGo4/view"
    },
    {
        nama: "66",
        nisn: "0072692122",
        pdfUrl: "https://drive.google.com/file/d/1TjzzgwDcUwTdP7b9jCSLpM09xKe9tmSP/view"
    },
    {
        nama: "67",
        nisn: "0082761860",
        pdfUrl: "https://drive.google.com/file/d/1roM-YbFekdIj48kcmiwa_gtiA2XULtAv/view"
    },
    {
        nama: "68",
        nisn: "0084441743",
        pdfUrl: "https://drive.google.com/file/d/1wShUd2zMdm9RQTneH-j7BBS7VK9P30cD/view"
    },
    {
        nama: "69",
        nisn: "0087395586",
        pdfUrl: "https://drive.google.com/file/d/1okfNc_yaLDuInPHHjC1DRZh6aXsk45m1/view"
    },
    {
        nama: "70",
        nisn: "0071669243",
        pdfUrl: "https://drive.google.com/file/d/1H6aJbCmSe4ssl2XAC-GXUBKs1WoHv83S/view"
    },
    {
        nama: "71",
        nisn: "0096633582",
        pdfUrl: "https://drive.google.com/file/d/1KMY8IwNE9bjXXDZZo2pAOzw6KDPdyA73/view"
    },
    {
        nama: "72",
        nisn: "0089345544",
        pdfUrl: "https://drive.google.com/file/d/1xbrXrfckhhUvZonz5WTMVbIO2lT3xJtY/view"
    },
    {
        nama: "73",
        nisn: "0071497565",
        pdfUrl: "https://drive.google.com/file/d/1Vze4W9i4OfRwHN729AsGfBzMXLJq5wp9/view"
    },
    {
        nama: "74",
        nisn: "0072845242",
        pdfUrl: "https://drive.google.com/file/d/17634gYuKaCQzM7CYWmRo4nO2JWe6yoxv/view"
    },
    {
        nama: "75",
        nisn: "0089021662",
        pdfUrl: "https://drive.google.com/file/d/1w_dSiZpurpPii5y_y-1wK7W0Lr296EAn/view"
    },
    {
        nama: "76",
        nisn: "0082084086",
        pdfUrl: "https://drive.google.com/file/d/19Lu6_I3eiYrT2ZW_0vn0u-F4jOAL_fwV/view"
    },
    {
        nama: "77",
        nisn: "0086606264",
        pdfUrl: "https://drive.google.com/file/d/112CWd17x98o8WwFE-_JJo5K22-BpLN_b/view"
    },
    {
        nama: "78",
        nisn: "0078720943",
        pdfUrl: "https://drive.google.com/file/d/1osM0dK6NrSJv211Yeog7TOOMyEbuNZ79/view"
    },
    {
        nama: "79",
        nisn: "0085280880",
        pdfUrl: "https://drive.google.com/file/d/11jjZNdRjGXAXHyiuABMdK5399cZVSuck/view"
    },
    {
        nama: "80",
        nisn: "0099753842",
        pdfUrl: "https://drive.google.com/file/d/1oOg6FWrRZ6C-vQZZX2BqmlWGm14ZEF-T/view"
    },
    {
        nama: "81",
        nisn: "0075271849",
        pdfUrl: "https://drive.google.com/file/d/1UM75663XtjDQVPtV0sOzvWrv9IkeYTd1/view"
    },
    {
        nama: "82",
        nisn: "0086110062",
        pdfUrl: "https://drive.google.com/file/d/1BMwK_uGbFD_rqY1d1TC3dadcpTr9Q9R9/view"
    },
    {
        nama: "83",
        nisn: "0088835794",
        pdfUrl: "https://drive.google.com/file/d/1Kv7YNUkUJxL0brGl8qlXR3I_Me23KknP/view"
    },
    {
        nama: "84",
        nisn: "0081307299",
        pdfUrl: "https://drive.google.com/file/d/1bvw-vjPLTWKjduRil0oJ4E0vvNkQd9eG/view"
    },
    {
        nama: "85",
        nisn: "0087173220",
        pdfUrl: "https://drive.google.com/file/d/1lro25OOD9GFZjkuCrmh9W6gKtQoFwzDA/view"
    },
    {
        nama: "86",
        nisn: "0084637422",
        pdfUrl: "https://drive.google.com/file/d/1MsDNBr9KANB2nJTrBk8Te2ZBlAqGTUv9/view"
    },
    {
        nama: "87",
        nisn: "0086417692",
        pdfUrl: "https://drive.google.com/file/d/1XC1wQ6C9N-bNi-jjngXi0um37oC8q_U_/view"
    },
    {
        nama: "88",
        nisn: "0087810607",
        pdfUrl: "https://drive.google.com/file/d/1g8W1kgn8Djw5d5DE2LQpbE1TOVH34BYz/view"
    },
    {
        nama: "89",
        nisn: "0087044741",
        pdfUrl: "https://drive.google.com/file/d/1TOVF8tDCKt5XQZ1-72_clJf00_FAXU7f/view"
    },
    {
        nama: "90",
        nisn: "0087548466",
        pdfUrl: "https://drive.google.com/file/d/16EG1lWYfh4sHnR9CA9kX5NOZ7Ue5rurW/view"
    },
    {
        nama: "91",
        nisn: "0074787246",
        pdfUrl: "https://drive.google.com/file/d/1dmUW8WptDgGI3JUU2eEgBogigu8Zu__Z/view"
    },
    {
        nama: "92",
        nisn: "0085466422",
        pdfUrl: "https://drive.google.com/file/d/1aiV4C63oFOCnZyuC1hYjxqwIkL8dyviz/view"
    },
    {
        nama: "93",
        nisn: "0076028911",
        pdfUrl: "https://drive.google.com/file/d/1E9XoW2xa1ck53b9P80ZFv4vr8j3HQOR2/view"
    },
    {
        nama: "94",
        nisn: "3085057520",
        pdfUrl: "https://drive.google.com/file/d/1N1WkMrpnFxLTybK2oyaSwaMgq-yT210q/view"
    },
    {
        nama: "95",
        nisn: "0091845170",
        pdfUrl: "https://drive.google.com/file/d/1fqx8Cs_bLcINTKfl70IZQ_F8xQU2ORpa/view"
    },
    {
        nama: "96",
        nisn: "0076941318",
        pdfUrl: "https://drive.google.com/file/d/19Oa43KLThf_e6gEGEmATrWeQxmxkvIE9/view"
    },
    {
        nama: "97",
        nisn: "0077665711",
        pdfUrl: "https://drive.google.com/file/d/1QRd2AbMSGR8cAtVRwxjyHq50KU1NtwNG/view"
    },
    {
        nama: "98",
        nisn: "0081420487",
        pdfUrl: "https://drive.google.com/file/d/1LjjOovgtTbMXTQPNM_1Fg0Cy-uDiGNGP/view"
    },
    {
        nama: "99",
        nisn: "0083708856",
        pdfUrl: "https://drive.google.com/file/d/1x2NSy9K0QF6bdFwsZ0ZByagp2cTaBTGD/view"
    },
    {
        nama: "100",
        nisn: "0082211785",
        pdfUrl: "https://drive.google.com/file/d/1ffF6gu4W0W-IEwVRmjh8Bm9gp8ZZk4as/view"
    },
    {
        nama: "101",
        nisn: "0072785663",
        pdfUrl: "https://drive.google.com/file/d/1BATGT5FuQWrHYGjqlks3QihiRC1YoOHk/view"
    },
    {
        nama: "102",
        nisn: "0072491963",
        pdfUrl: "https://drive.google.com/file/d/1MKwieckP0ehmzXOc_DdlaWO6N7Tugci3/view"
    },
    {
        nama: "103",
        nisn: "0088570581",
        pdfUrl: "https://drive.google.com/file/d/1bvMXZVfXbVDGjLY8HY45PutsKkCmJmUY/view"
    },
    {
        nama: "104",
        nisn: "0081082957",
        pdfUrl: "https://drive.google.com/file/d/1ArEZjM3qkczaTJE2knxbE-WkkuOGsbuZ/view"
    },
    {
        nama: "105",
        nisn: "0072521832",
        pdfUrl: "https://drive.google.com/file/d/1Zw3X-y-wxKG-goxhUvmPgpzrb8BSrY6T/view"
    },
    {
        nama: "106",
        nisn: "0081397166",
        pdfUrl: "https://drive.google.com/file/d/1yQpl38CfWPVqkSeSRgb9f7tRc3eKpueU/view"
    },
    {
        nama: "107",
        nisn: "0078732509",
        pdfUrl: "https://drive.google.com/file/d/1FGtr89gXryiHzdA8ayP2tzzzXvgiRh28/view"
    },
    {
        nama: "108",
        nisn: "0071641875",
        pdfUrl: "https://drive.google.com/file/d/13LqAO645NTdBGZgcOt4lXxBc47rXpNea/view"
    },
    {
        nama: "109",
        nisn: "0077602504",
        pdfUrl: "https://drive.google.com/file/d/1YJxvg1iLrAV8F0-duiYrTQ6aXmi84exG/view"
    },
    {
        nama: "110",
        nisn: "0083774075",
        pdfUrl: "https://drive.google.com/file/d/1s_uKAUM7aiHjwLgFKuWeAskLMwnAk7yY/view"
    },
    {
        nama: "111",
        nisn: "0083290971",
        pdfUrl: "https://drive.google.com/file/d/1RiwEUWvMjBk3Yr4YWGzcVnorwY3aqAUv/view"
    },
    {
        nama: "112",
        nisn: "0081555958",
        pdfUrl: "https://drive.google.com/file/d/1dMioPINFyJ38ow4hNO51Tcbw_9KANGPv/view"
    },
    {
        nama: "113",
        nisn: "0086868002",
        pdfUrl: "https://drive.google.com/file/d/1d-GL108dpIedvwgLL04_1w-zqtPdf0Vr/view"
    },
    {
        nama: "114",
        nisn: "0084099620",
        pdfUrl: "https://drive.google.com/file/d/1BxRz1vVk6__usl6qX-AODe_peD5Nkb5U/view"
    },
    {
        nama: "115",
        nisn: "3089967344",
        pdfUrl: "https://drive.google.com/file/d/14xWHjW_Y-e3srrCJfLHqQBXCyTX8SC3F/view"
    },
    {
        nama: "116",
        nisn: "0089251096",
        pdfUrl: "https://drive.google.com/file/d/14JpCqF_MonryJF1EU214s7YKGSwVMRrj/view"
    },
    {
        nama: "117",
        nisn: "0077962515",
        pdfUrl: "https://drive.google.com/file/d/1QgThiBefaP6hqJ-krLNJE6eQrnhG2V0x/view"
    },
    {
        nama: "118",
        nisn: "0074789246",
        pdfUrl: "https://drive.google.com/file/d/1XD2_tRKSbCmP0oYyaopluJ9TaF0OBNSs/view"
    },
    {
        nama: "119",
        nisn: "0087910021",
        pdfUrl: "https://drive.google.com/file/d/1nHFwYl2su07M6lVznF70rqBOkMrgKWYD/view"
    },
    {
        nama: "120",
        nisn: "0081782705",
        pdfUrl: "https://drive.google.com/file/d/1BXxYDCfPQGBMe-Ey4HoZJIgxKWQqoKFt/view"
    },
    {
        nama: "121",
        nisn: "0086527096",
        pdfUrl: "https://drive.google.com/file/d/12m4IDi8kj3XkNJ65Ap-L1GX87AynQ9Nj/view"
    },
    {
        nama: "122",
        nisn: "0086991234",
        pdfUrl: "https://drive.google.com/file/d/1m8EMFYSNIqRwEiIR47epapRtwtl9b7B1/view"
    },
    {
        nama: "123",
        nisn: "0085216740",
        pdfUrl: "https://drive.google.com/file/d/1fGyGqlK-MNl7r-q5Z7nbMFM2a118niEe/view"
    },
    {
        nama: "124",
        nisn: "0078625421",
        pdfUrl: "https://drive.google.com/file/d/1mgVc0ruFsiHzLSuomnMTB0YFowz2ZdHi/view"
    },
    {
        nama: "125",
        nisn: "0083453651",
        pdfUrl: "https://drive.google.com/file/d/1jo4iD2I8BLICZEyXaXRGj9pEVCztx-Dm/view"
    },
    {
        nama: "126",
        nisn: "0076380098",
        pdfUrl: "https://drive.google.com/file/d/18b_gpANDNr3p2nLpzakIO4T7sX6VaUsQ/view"
    },
    {
        nama: "127",
        nisn: "0076598576",
        pdfUrl: "https://drive.google.com/file/d/1Iv9hw4pbfaeXaQvuRoooHmszV-JvDSXo/view"
    },
    {
        nama: "128",
        nisn: "0077533467",
        pdfUrl: "https://drive.google.com/file/d/1H6T2HVqXKqw-SvthNE-sbJYIgv6Nsf06/view"
    },
    {
        nama: "129",
        nisn: "0089433603",
        pdfUrl: "https://drive.google.com/file/d/1EVA4PzVboexj9GBBGvsHRzzJm4nkqvkg/view"
    },
    {
        nama: "130",
        nisn: "0086338553",
        pdfUrl: "https://drive.google.com/file/d/1fUQxpe_PxgwGUDVCYUBTTM-zlLKBIymr/view"
    },
    {
        nama: "131",
        nisn: "0087912650",
        pdfUrl: "https://drive.google.com/file/d/1F6wcYaInFMGhL3IY9d_aXTAUYvQN7-0S/view"
    },
    {
        nama: "132",
        nisn: "0076333128",
        pdfUrl: "https://drive.google.com/file/d/1AmwSMt3sJrNNmUSyvfhVvNn9aJqcn7CU/view"
    },
    {
        nama: "133",
        nisn: "0072848841",
        pdfUrl: "https://drive.google.com/file/d/19W0u7TpUb1IgFH5ZgNUkd31DFl_Jjho7/view"
    },
    {
        nama: "134",
        nisn: "0076786603",
        pdfUrl: "https://drive.google.com/file/d/11chbeadigQ47fvbhnxc8jba14kNRG9Vg/view"
    },
    {
        nama: "135",
        nisn: "0087675268",
        pdfUrl: "https://drive.google.com/file/d/1oqQUJlrQK7r5ZwJ3K7fDowayTFUfBqf7/view"
    }
];

// const TANGGAL_PENGUMUMAN = new Date(Date.UTC(2026, 4, 5, 8, 0, 0)); // 5 Mei 2026 pukul 16:00 WITA

// function checkAccessTime() {
//     const now = new Date();
//     return now >= TANGGAL_PENGUMUMAN;
// }

// document.getElementById('formKelulusan').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     if (!checkAccessTime()) {
//         alert("Pengumuman kelulusan akan tersedia mulai 16:00 WITA, 5 Mei 2026");
//         return;
//     }
    
//     const nisn = document.getElementById('nisn').value.trim();
//     const siswa = siswaValid.find(s => s.nisn === nisn);
    
//     if (siswa) {
//         window.location.href = siswa.pdfUrl;
//     } else {
//         alert("NISN tidak ditemukan!");
//     }
// });

// // Countdown timer
// let countdownInterval = null;

// function updateCountdown() {
//     const now = new Date();
//     const diff = TANGGAL_PENGUMUMAN - now;

//     if (diff > 0) {
//         const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
//         document.getElementById('countdown').innerHTML = `
//             Pengumuman akan dibuka dalam:<br>
//             <span style="font-size: 1.5em;">${days} hari ${hours} jam ${minutes} menit ${seconds} detik</span>
//         `;
//     } else {
//         if (countdownInterval) {
//             clearInterval(countdownInterval);
//             countdownInterval = null;
//         }
//         document.getElementById('countdown').innerHTML = "Pengumuman kelulusan telah dibuka!";
//     }
// }

// // Jalankan countdown hanya jika waktu belum tercapai
// if (!checkAccessTime()) {
//     updateCountdown();
//     countdownInterval = setInterval(updateCountdown, 1000);
// } else {
//     document.getElementById('countdown').innerHTML = "Pengumuman kelulusan telah dibuka!";
// }


// ─── COUNTDOWN ───
        // Set tanggal pengumuman di sini (ubah sesuai kebutuhan)
        const TARGET_DATE = new Date('2025-07-05T08:00:00+08:00');

        const cdDays  = document.getElementById('cd-days');
        const cdHours = document.getElementById('cd-hours');
        const cdMins  = document.getElementById('cd-mins');
        const cdSecs  = document.getElementById('cd-secs');
        const countdownWrap = document.querySelector('.countdown-wrap');

        function updateCountdown() {
            const now = new Date();
            const diff = TARGET_DATE - now;

            if (diff <= 0) {
                cdDays.textContent  = '00';
                cdHours.textContent = '00';
                cdMins.textContent  = '00';
                cdSecs.textContent  = '00';
                countdownWrap.querySelector('.countdown-label').textContent = 'Pengumuman sudah dibuka!';
                return;
            }

            const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const mins  = Math.floor((diff / (1000 * 60)) % 60);
            const secs  = Math.floor((diff / 1000) % 60);

            cdDays.textContent  = String(days).padStart(2, '0');
            cdHours.textContent = String(hours).padStart(2, '0');
            cdMins.textContent  = String(mins).padStart(2, '0');
            cdSecs.textContent  = String(secs).padStart(2, '0');
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);




//Form data siswa jika NISN tidak ditemukan
document.getElementById('formKelulusan').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nisn = document.getElementById('nisn').value.trim();
    const siswa = siswaValid.find(s => s.nisn === nisn);
    
    if (siswa) {
        window.location.href = siswa.pdfUrl;
    } else {
        alert("NISN tidak ditemukan!");
    }
});

// Hapus semua elemen countdown atau sembunyikan
const countdownElement = document.getElementById('countdown');
if (countdownElement) {
    countdownElement.style.display = 'none';
}
