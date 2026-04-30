// Database siswa dan link PDF
const siswaValid = [
    {
        nama: "1 ",
        nisn: "0063624784",
        pdfUrl: "https://drive.google.com/file/d/1av_H__tAu6BhlNTH75hzAckUczOJ3eMx/view?usp=drive_link"
    },
    {
        nama: "2 ",
        nisn: "0082904512",
        pdfUrl: "https://drive.google.com/file/d/1f1PBL4d9mSG7ByYWQuHSX26pn3lMqVqT/view"
    },
    {
        nama: "3 ",
        nisn: "0095472442",
        pdfUrl: "https://drive.google.com/file/d/1ITIYyHlsjAaTvPkcWbuea2DC99dhxHEB/view"
    },
    {
        nama: "4 ",
        nisn: "0088911046",
        pdfUrl: "https://drive.google.com/file/d/1fL07u_Ac_doGMQ_pM1M4cbHExwcUZQ8Y/view"
    },
    {
        nama: "5 ",
        nisn: "0076811726",
        pdfUrl: "https://drive.google.com/file/d/1CcJf2b_o782PQ9rVQqtebmzZ9f9jt9nV/view"
    },
    {
        nama: "6 ",
        nisn: "0077875572",
        pdfUrl: "https://drive.google.com/file/d/14Ga2jrRrueOSs2hVDnsmczwHQ0EUoS7Y/view"
    },
    {
        nama: "7 ",
        nisn: "0076743778",
        pdfUrl: "https://drive.google.com/file/d/1cBt4CMKEkl1oQOXB5KttIyGdq1z2wC_5/view"
    },
    {
        nama: "8 ",
        nisn: "0076876844",
        pdfUrl: "https://drive.google.com/file/d/1QqZCtXUXrGlfCim73CUuyHRh_w3PFPMJ/view"
    },
    {
        nama: "9 ",
        nisn: "0083785219",
        pdfUrl: "https://drive.google.com/file/d/1SiqdTpsTvWAfe_-KUjKvEEfzYyWGcHwh/view"
    },
    {
        nama: "10 ",
        nisn: "0072577734",
        pdfUrl: "https://drive.google.com/file/d/1-B4QF_kaAlL99lKGCPzZcmckt6POFX4q/view"
    },
    {
        nama: "11 ",
        nisn: "0077020141",
        pdfUrl: "https://drive.google.com/file/d/1dSmg0tLY7CJRjrQdBN_B_t0egvOAmj03/view"
    },
    {
        nama: "12 ",
        nisn: "0106433271",
        pdfUrl: "https://drive.google.com/file/d/1_Tugge85u6apwSleeNp2TviqwpBe02mq/view"
    },
    {
        nama: "13 ",
        nisn: "0088628373",
        pdfUrl: "https://drive.google.com/file/d/1LostjLli-MajDvmIoJbJF0cqU9qR27w-/view"
    },
    {
        nama: "14 ",
        nisn: "0098487906",
        pdfUrl: "https://drive.google.com/file/d/1ltXmGqVlOuZy8pbGLsJjlc9iAbYjYAcu/view"
    },
    {
        nama: "15 ",
        nisn: "0074913957",
        pdfUrl: "https://drive.google.com/file/d/1MRIWzzie7_gksstO7QYWUoY6JDfWyIGj/view"
    },
    {
        nama: "16 ",
        nisn: "0089264281",
        pdfUrl: "https://drive.google.com/file/d/1TBZtU6tMqwLaGCiV8U0IA1FaK2s-Oalq/view"
    },
    {
        nama: "17 ",
        nisn: "3082775053",
        pdfUrl: "https://drive.google.com/file/d/1V-4WJdA48fIioBNQ8lieOzqEM1RDRobs/view"
    },
    {
        nama: "18 ",
        nisn: "0071521780",
        pdfUrl: "https://drive.google.com/file/d/1qLCkq5HacJ6ryIs9HXyNPY4siLLJSeRY/view"
    },
    {
        nama: "19 ",
        nisn: "0025304927",
        pdfUrl: "https://drive.google.com/file/d/1h6r5jupm7OP17_YgSRpR_vQ08nbAGIBm/view"
    },
    {
        nama: "20 ",
        nisn: "0084633295",
        pdfUrl: "https://drive.google.com/file/d/1-XIu8GX55kC1jfXgXinfpExWSTO9So0v/view"
    },
    {
        nama: "21 ",
        nisn: "0089910957",
        pdfUrl: "https://drive.google.com/file/d/1FnfoKDHZvIBMtIYdFbVbfp5HRDeflLby/view"
    },
    {
        nama: "22 ",
        nisn: "0089169124",
        pdfUrl: "https://drive.google.com/file/d/1uqJzuMt1whAnOQfnJM0it68I4O-qaU3o/view"
    },
    {
        nama: "23 ",
        nisn: "0088272099",
        pdfUrl: "https://drive.google.com/file/d/1Na6xcPECmt8n5T0eYWzbRfE4izOXyPzA/view"
    },
    {
        nama: "24 ",
        nisn: "0084978104",
        pdfUrl: "https://drive.google.com/file/d/171CiYjiLbTblJpvzc2Ll07Z5xt8Ng_iK/view"
    },
    {
        nama: "25 ",
        nisn: "0088342818",
        pdfUrl: "https://drive.google.com/file/d/1qo6NFeY6fBBUTG56utaHcq4pSTCWHeFN/view"
    },
    {
        nama: "26 ",
        nisn: "0088748880",
        pdfUrl: "https://drive.google.com/file/d/1atopVORmyMVje4K5Tv97hyCZTD2WrGcU/view"
    },
    {
        nama: "27 ",
        nisn: "0075649675",
        pdfUrl: "https://drive.google.com/file/d/1Kp3FJ_BWznvxhY0CzTS9WFHKdcj0TaMq/view"
    },
    {
        nama: "28 ",
        nisn: "0088759799",
        pdfUrl: "https://drive.google.com/file/d/14GEYoY8UQjvpEa6ThdTUw2VU0B5Gzq1T/view"
    },
    {
        nama: "29 ",
        nisn: "0088643808",
        pdfUrl: "https://drive.google.com/file/d/1Hw-ZZ_YFxh-2Y4Syvb1rxV17y9w--P7P/view"
    },
    {
        nama: "30 ",
        nisn: "0084373076",
        pdfUrl: "https://drive.google.com/file/d/1oE53zUZ_4uR6QKMu48VUAhzNgUUTT_Jc/view"
    },
    {
        nama: "31 ",
        nisn: "0072303404",
        pdfUrl: "https://drive.google.com/file/d/1VmnvBvc0_mvecm_nFiNvYAS8U-vW3BfH/view"
    },
    {
        nama: "32 ",
        nisn: "0078816629",
        pdfUrl: "https://drive.google.com/file/d/1X8O2u-VBgwZM8LTDxBjQGGSUVNlJFZ1S/view"
    },
    {
        nama: "33 ",
        nisn: "0075771159",
        pdfUrl: "https://drive.google.com/file/d/1hIdZ-IVgf-DaSgVGLMUzNFghi82bKWj-/view"
    },
    {
        nama: "34 ",
        nisn: "0087158292",
        pdfUrl: "https://drive.google.com/file/d/1S8W5jMK3Hptw9xomJg5W3rBZd7n0x1GH/view"
    },
    {
        nama: "35 ",
        nisn: "0074578721",
        pdfUrl: "https://drive.google.com/file/d/1KUhrtqNK5UEXrJ6rzJs9ahqX6yE0WWfB/view"
    },
    {
        nama: "36 ",
        nisn: "0088665727",
        pdfUrl: "https://drive.google.com/file/d/1UbQBzEWJh3NGGsfkum6MTnTO2usIPkx7/view"
    },
    {
        nama: "37 ",
        nisn: "0086029223",
        pdfUrl: "https://drive.google.com/file/d/1jRin79IKmbpkovhkpetVWBLB2eCyGUX1/view"
    },
    {
        nama: "38 ",
        nisn: "3087439979",
        pdfUrl: "https://drive.google.com/file/d/1xGrg_ltUPBHlsQaDztuDKjjtzzibLO4z/view"
    },
    {
        nama: "39 ",
        nisn: "0084201421",
        pdfUrl: "https://drive.google.com/file/d/1dLCLdBKx57IIPwUQybqQcWpwY8qQE4BU/view"
    },
    {
        nama: "40 ",
        nisn: "0081940237",
        pdfUrl: "https://drive.google.com/file/d/1D1p-V3uctN2r3daMz1h3LgMK-GIZuDgF/view"
    },
    {
        nama: "41 ",
        nisn: "0088113421",
        pdfUrl: "https://drive.google.com/file/d/1axTGuCKnHPl5uvamQhBWc16ym8XW3Y_f/view"
    },
    {
        nama: "42 ",
        nisn: "3076056473",
        pdfUrl: "https://drive.google.com/file/d/1VchjsZbP4JbfB59LcGRK4gky09AInud8/view"
    },
    {
        nama: "43 ",
        nisn: "0085728395",
        pdfUrl: "https://drive.google.com/file/d/1GGe4Yap7X7iVZnbj0Q4_dJ6rNerGtbG8/view"
    },
    {
        nama: "44 ",
        nisn: "0083459719",
        pdfUrl: "https://drive.google.com/file/d/177gFnViqP6pnzy8B_qc42CGx-oh0a0Jx/view"
    },
    {
        nama: "45 ",
        nisn: "0077480941",
        pdfUrl: "https://drive.google.com/file/d/1W6Qn3S9C19PrQFX3sLFyDqPQAbDn4jsg/view"
    },
    {
        nama: "46 ",
        nisn: "0086195296",
        pdfUrl: "https://drive.google.com/file/d/1UojMaExd2ogq-kL17JrejzH1bXcEzmYA/view"
    },
    {
        nama: "47 ",
        nisn: "0074863233",
        pdfUrl: "https://drive.google.com/file/d/11MJIRb-Qc5xb8FmbDt8Dq96K97NB3Tw8/view"
    },
    {
        nama: "48 ",
        nisn: "0085943306",
        pdfUrl: "https://drive.google.com/file/d/1i0fVzXhgykRB4huwhdJkXsGNefDR4GB9/view"
    },
    {
        nama: "49 ",
        nisn: "0077546763",
        pdfUrl: "https://drive.google.com/file/d/1Ss1MWNZi0kMy5FeSBaX-tWJXlIQygnmt/view"
    },
    {
        nama: "50 ",
        nisn: "0081509068",
        pdfUrl: "https://drive.google.com/file/d/1L8yDucPuSK_ZcI9F5h4ZH4JQRgCaIaZ8/view"
    },
    {
        nama: "51 ",
        nisn: "0088420644",
        pdfUrl: "https://drive.google.com/file/d/145h8FbBnEsd7BIvasUZ4w8WXxRl2VUrn/view"
    },
    {
        nama: "52 ",
        nisn: "0085678895",
        pdfUrl: "https://drive.google.com/file/d/17YOHBnzX1S5rk-YArkR79enyN0siTBOT/view"
    },
    {
        nama: "53 ",
        nisn: "0074769541",
        pdfUrl: "https://drive.google.com/file/d/1RFP_hmSM8ARPDP5QkLmewoqonzB1s5E0/view"
    },
    {
        nama: "54 ",
        nisn: "0087431925",
        pdfUrl: "https://drive.google.com/file/d/1pFX89NOMPZaYJfArwAkt_SBBnSDCTMXJ/view"
    },
    {
        nama: "55 ",
        nisn: "0076192496",
        pdfUrl: "https://drive.google.com/file/d/1O-QYP6K5LHbWgxb721KhD_le8XSPbsHe/view"
    },
    {
        nama: "56 ",
        nisn: "0076459252",
        pdfUrl: "https://drive.google.com/file/d/12bXCaMi80BrrbAgR6HwhP1SEoptPvI6e/view"
    },
    {
        nama: "57 ",
        nisn: "0084642351",
        pdfUrl: "https://drive.google.com/file/d/1OZ0In5Ytaomn6lkoZrgyr8kBehZ51wq3/view"
    },
    {
        nama: "58 ",
        nisn: "0081545010",
        pdfUrl: "https://drive.google.com/file/d/1JX0QFnxoHFDCR6AgjEQfrtmVmZ7wtlDO/view"
    },
    {
        nama: "59 ",
        nisn: "0085501626",
        pdfUrl: "https://drive.google.com/file/d/1Lyr57W2wcuawN1MPswGsRXj_Cmc4AIzA/view"
    },
    {
        nama: "60 ",
        nisn: "0078182610",
        pdfUrl: "https://drive.google.com/file/d/126qRAhDdShu0ynQZWb2hxrAhaBU5Qlyi/view"
    },
        {
        nama: "61",
        nisn: "0088007514",
        pdfUrl: "https://drive.google.com/file/d/1rNHd-Gw9ZHmINfytvogSgL9q2UwtXV-R/view"
    },
    {
        nama: "62",
        nisn: "0073838739",
        pdfUrl: "https://drive.google.com/file/d/1bd9ruL1x_n9Wsu9OEiqEvEk0CWHInBKq/view"
    },
    {
        nama: "63",
        nisn: "0074131278",
        pdfUrl: "https://drive.google.com/file/d/1poDx-OzGq-3yoAplV55RhPJXJKEKd0LE/view"
    },
    {
        nama: "64",
        nisn: "0077248915",
        pdfUrl: "https://drive.google.com/file/d/1a3yfE3gv0qyIUcSowWGs7EwAmG4kXNIx/view"
    },
    {
        nama: "65",
        nisn: "0081717790",
        pdfUrl: "https://drive.google.com/file/d/1fK6JKW6ue4qYWydqI9bn3Y1tSILd9Rd9/view"
    },
    {
        nama: "66",
        nisn: "0072692122",
        pdfUrl: "https://drive.google.com/file/d/1LlfEb8JbaruEq2fpTfrqPjEcIkv6sQ98/view"
    },
    {
        nama: "67",
        nisn: "0082761860",
        pdfUrl: "https://drive.google.com/file/d/1ow5IddQIkvxzqvE3sQeLrq0vSvWCJOIe/view"
    },
    {
        nama: "68",
        nisn: "0084441743",
        pdfUrl: "https://drive.google.com/file/d/1saysutVJYLjB8y2ssTniyqZ3PVqZ4H1o/view"
    },
    {
        nama: "69",
        nisn: "0087395586",
        pdfUrl: "https://drive.google.com/file/d/1fg3rik2tM56Ai_AuYzbnAu_ZG0TQQKy9/view"
    },
    {
        nama: "70",
        nisn: "0071669243",
        pdfUrl: "https://drive.google.com/file/d/1CSghE7N4xQYmrgK3XAiznHpOH3YIjqhG/view"
    },
        {
        nama: "71",
        nisn: "0096633582",
        pdfUrl: "https://drive.google.com/file/d/1qOTwJpQ2kr6chjAXZhe73B29zMVOwW2-/view"
    },
    {
        nama: "72",
        nisn: "0089345544",
        pdfUrl: "https://drive.google.com/file/d/13beRbr2xT1nLad3qaIlmnPgNgTn0eKrY/view"
    },
    {
        nama: "73",
        nisn: "0071497565",
        pdfUrl: "https://drive.google.com/file/d/1obgY5y3jX8LmJEGumUYXslfNsON7Tgi8/view"
    },
    {
        nama: "74",
        nisn: "0072845242",
        pdfUrl: "https://drive.google.com/file/d/1DnJ2aeFPFnMbv6lDlCUsaQhDh52AYFUY/view"
    },
    {
        nama: "75",
        nisn: "0089021662",
        pdfUrl: "https://drive.google.com/file/d/1jqtIJm2bguYm_8de-YBxcs3U4HpR5NQ1/view"
    },
    {
        nama: "76",
        nisn: "0082084086",
        pdfUrl: "https://drive.google.com/file/d/1ITqwuHjESQ36m3lDxt-P-ZCQNCWnrPO0/view"
    },
    {
        nama: "77",
        nisn: "0086606264",
        pdfUrl: "https://drive.google.com/file/d/1KwFjrjtjiu8VUUBov0IdWcprFv4XMNIQ/view"
    },
    {
        nama: "78",
        nisn: "0078720943",
        pdfUrl: "https://drive.google.com/file/d/1GM15YEdMV0Mpugs5cBj63hVKKswScReZ/view"
    },
    {
        nama: "79",
        nisn: "0085280880",
        pdfUrl: "https://drive.google.com/file/d/1aShP6lfiEV4N6piL3rcOr4G62BDiHN-Y/view"
    },
    {
        nama: "80",
        nisn: "0099753842",
        pdfUrl: "https://drive.google.com/file/d/19bVATGfom6b4dPC2o5786g4JucHhWh4A/view"
    },
        {
        nama: "81",
        nisn: "0075271849",
        pdfUrl: "https://drive.google.com/file/d/1CpEByteZxgHlPqrbPHZ4PZ2F0zG7_XYO/view"
    },
    {
        nama: "82",
        nisn: "0086110062",
        pdfUrl: "https://drive.google.com/file/d/167xlB_QzokWG48CbYI0lf8RQRw83sQez/view"
    },
    {
        nama: "83",
        nisn: "0088835794",
        pdfUrl: "https://drive.google.com/file/d/1m5vZ-ics_PY6ISvGHhzkmQJ5LWQh0Vmr/view"
    },
    {
        nama: "84",
        nisn: "0081307299",
        pdfUrl: "https://drive.google.com/file/d/1LFuh7KPnnvvuckKO8QeWmX-eNd7HjhXi/view"
    },
    {
        nama: "85",
        nisn: "0087173220",
        pdfUrl: "https://drive.google.com/file/d/101syQswP2KxSRM_YPQ2zaM-5IdXxgfwW/view"
    },
    {
        nama: "86",
        nisn: "0084637422",
        pdfUrl: "https://drive.google.com/file/d/14SvF1e81HluhF3NZXuQhEfxShN2_88Ot/view"
    },
    {
        nama: "87",
        nisn: "0086417692",
        pdfUrl: "https://drive.google.com/file/d/1L_xg7VrEirhpraaC3n910uSMyBBZEGSw/view"
    },
    {
        nama: "88",
        nisn: "0087810607",
        pdfUrl: "https://drive.google.com/file/d/1J9EnOORGQIJDuVJLUpSZP1oW7hg-PDM8/view"
    },
    {
        nama: "89",
        nisn: "0087044741",
        pdfUrl: "https://drive.google.com/file/d/1rFVTqN9__EHrBa6kRQLH0T8XgbtqrYis/view"
    },
    {
        nama: "90",
        nisn: "0087548466",
        pdfUrl: "https://drive.google.com/file/d/1FGZvLtRV_Qh0OkwOQJ1Jwcjo74Xs79FK/view"
    },
    {
        nama: "91",
        nisn: "0074787246",
        pdfUrl: "https://drive.google.com/file/d/1X0ETywSOHKq_eTKVnGKXdrV4Y0ZDqz7y/view"
    },
    {
        nama: "92",
        nisn: "0085466422",
        pdfUrl: "https://drive.google.com/file/d/1J9r3UxNmq3yXeK4msiMaQrA-D9-TdpkZ/view"
    },
    {
        nama: "93",
        nisn: "0076028911",
        pdfUrl: "https://drive.google.com/file/d/15Kf4FCQNnAMPhBve865NGHW_aCvO2mz_/view"
    },
    {
        nama: "94",
        nisn: "3085057520",
        pdfUrl: "https://drive.google.com/file/d/17ZssHspW7879bmrQLTV4XGutew34-nAP/view"
    },
    {
        nama: "95",
        nisn: "950091845170",
        pdfUrl: "https://drive.google.com/file/d/1E_jOupR5ygb8KgxsYiVlSvcgYJq-_ADw/view"
    },
    {
        nama: "96",
        nisn: "0076941318",
        pdfUrl: "https://drive.google.com/file/d/18sIKjguTNbhESxEDOZ6YTittmLuZCnnh/view"
    },
    {
        nama: "97",
        nisn: "0077665711",
        pdfUrl: "https://drive.google.com/file/d/12TpF5OrFlQ5iFRmomgoqXYOzYtKVdcKE/view"
    },
    {
        nama: "98",
        nisn: "0081420487",
        pdfUrl: "https://drive.google.com/file/d/1_iBjF5nxClMWkDXEpqKUH-Cj_pA-yygG/view"
    },
    {
        nama: "99",
        nisn: "0083708856",
        pdfUrl: "https://drive.google.com/file/d/16VLUonEZYXruBpYiqJ6pgavOyhCUea2T/view"
    },
    {
        nama: "100",
        nisn: "0082211785",
        pdfUrl: "https://drive.google.com/file/d/1RdJ0ygj1_trcwLKE0jStHfmDASOkRpys/view"
    },
        {
        nama: "101",
        nisn: "0072785663",
        pdfUrl: "https://drive.google.com/file/d/1-Ny0vUE-9i2z1pHrk7vcM8zwHvfHGaEk/view"
    },
    {
        nama: "102",
        nisn: "0072491963",
        pdfUrl: "https://drive.google.com/file/d/1oG6k41K6TDv0t78BN3PalcZDbxT1bN2C/view"
    },
    {
        nama: "103",
        nisn: "0088570581",
        pdfUrl: "https://drive.google.com/file/d/1zzxEXJbvN5S_V24vI9lrXjUHvatycPlj/view"
    },
    {
        nama: "104",
        nisn: "0081082957",
        pdfUrl: "https://drive.google.com/file/d/1of5GQnbeD6v-KIS3PZDu6w01wMvENjYH/view"
    },
    {
        nama: "105",
        nisn: "0072521832",
        pdfUrl: "https://drive.google.com/file/d/1WIM4-yMokPlAI3Ax23vvOsL9eo2tRCcF/view"
    },
    {
        nama: "106",
        nisn: "0081397166",
        pdfUrl: "https://drive.google.com/file/d/1bKWxb0S2AdqUZBEi8AN9MW_6bbrvL2lI/view"
    },
    {
        nama: "107",
        nisn: "0078732509",
        pdfUrl: "https://drive.google.com/file/d/1OT3QoX6HhDHuPzQx8IallAz3i37igXXh/view"
    },
    {
        nama: "108",
        nisn: "0071641875",
        pdfUrl: "https://drive.google.com/file/d/1s49IhTZZ7R3DhZxgtr9WGz3Ge-J6xhv3/view"
    },
    {
        nama: "109",
        nisn: "0077602504",
        pdfUrl: "https://drive.google.com/file/d/1dGXUofO6JgOmQpszfQK_hz2Nlk2F1gCg/view"
    },
    {
        nama: "110",
        nisn: "0083774075",
        pdfUrl: "https://drive.google.com/file/d/1PXQfpAQ-NpA7wstc0RkH4xLaFXPsMIHe/view"
    },
    {
        nama: "111",
        nisn: "0083290971",
        pdfUrl: "https://drive.google.com/file/d/1oEqcgOcN0j1-FSgro2mSc28TlBH-aP_K/view"
    },
    {
        nama: "112",
        nisn: "0081555958",
        pdfUrl: "https://drive.google.com/file/d/1yLcBCxcFaYPrlWTrHL6oUFgeovOUmrgw/view"
    },
    {
        nama: "113",
        nisn: "0086868002",
        pdfUrl: "https://drive.google.com/file/d/1tMsfNKVesqMh6bFeIPJUY-lvJY0IgiMJ/view"
    },
    {
        nama: "114",
        nisn: "0084099620",
        pdfUrl: "https://drive.google.com/file/d/1PM7_0yW1zrtyRQvp0VztZD-GPNqLMdrV/view"
    },
    {
        nama: "115",
        nisn: "3089967344",
        pdfUrl: "https://drive.google.com/file/d/1SuT8UFTPweIrVsi5p8-3VlNahtjI1SWM/view"
    },
    {
        nama: "116",
        nisn: "0089251096",
        pdfUrl: "https://drive.google.com/file/d/16pyrRn634DDRtxj4L5Sfnh8I-W0Kzi_m/view"
    },
    {
        nama: "117",
        nisn: "0077962515",
        pdfUrl: "https://drive.google.com/file/d/14CAtW9GAEkThWqf0-cETKoZs29hJihic/view"
    },
    {
        nama: "118",
        nisn: "0074789246",
        pdfUrl: "https://drive.google.com/file/d/1YsjcNYqopvsy4XNIXXxRoGX77T_-iaPM/view"
    },
    {
        nama: "119",
        nisn: "0087910021",
        pdfUrl: "https://drive.google.com/file/d/17fJqvyI5ItRroG5R10o27PPg5N6b_oFp/view"
    },
    {
        nama: "120",
        nisn: "0081782705",
        pdfUrl: "https://drive.google.com/file/d/17MxevDiWSNCaShqfQFQB9hr5Km6pkjVU/view"
    },
        {
        nama: "121",
        nisn: "0086527096",
        pdfUrl: "https://drive.google.com/file/d/1IMgVlEQdJSDeULMvJ9HaivLHBNeOBByc/view"
    },
    {
        nama: "122",
        nisn: "0086991234",
        pdfUrl: "https://drive.google.com/file/d/1OE5z6MLkZOlspoZ6xkejRsEWgFnKHwYT/view"
    },
    {
        nama: "123",
        nisn: "0085216740",
        pdfUrl: "https://drive.google.com/file/d/1gbEGk4cPQgMWUw1PmrMyNqrOETpmSMfe/view"
    },
    {
        nama: "124",
        nisn: "0078625421",
        pdfUrl: "https://drive.google.com/file/d/1OSN5QJwzpBnh9X7JjdZoU02QteTilvi0/view"
    },
    {
        nama: "125",
        nisn: "0083453651",
        pdfUrl: "https://drive.google.com/file/d/1lx4zPRS9mN--czwP8hg9jF1WeTJzZm0G/view"
    },
    {
        nama: "126",
        nisn: "0076380098",
        pdfUrl: "https://drive.google.com/file/d/1YL4Q4mh_RwPxdXg1jm8ZibqfBNdhPYkZ/view"
    },
    {
        nama: "127",
        nisn: "0076598576",
        pdfUrl: "https://drive.google.com/file/d/1on9y0Ox0MsPqUbpn5r5XXySIXFGg13dm/view"
    },
    {
        nama: "128",
        nisn: "0077533467",
        pdfUrl: "https://drive.google.com/file/d/1DLN0UvjarL3gtlZs9BBzrVpmtSBHsFnz/view"
    },
    {
        nama: "129",
        nisn: "0089433603",
        pdfUrl: "https://drive.google.com/file/d/1xGYXiv06bYNQclOutMAeCfVtAKv89DgR/view"
    },
    {
        nama: "130",
        nisn: "0086338553",
        pdfUrl: "https://drive.google.com/file/d/1O9C9etG0Awjs7J0BVnMZvSPWECd5gaJt/view"
    },
    {
        nama: "131",
        nisn: "0087912650",
        pdfUrl: "https://drive.google.com/file/d/1Sy_P0UizeZblI23MDKlYxmHKCVb1hCiK/view"
    },
    {
        nama: "132",
        nisn: "0076333128",
        pdfUrl: "https://drive.google.com/file/d/1ay3JOUY2sL62bFleaAsm9CYYN0wKcZDS/view"
    },
    {
        nama: "133",
        nisn: "0072848841",
        pdfUrl: "https://drive.google.com/file/d/1g5-a2Z4Rb_t3Gy_MiC0RaiDaMgLTo7t_/view"
    },
    {
        nama: "134",
        nisn: "0076786603",
        pdfUrl: "https://drive.google.com/file/d/1Re2q5_ZgBoSEHNwFwHy4eoEqi2DP3N7C/view"
    },
    {
        nama: "135",
        nisn: "0087675268",
        pdfUrl: "https://drive.google.com/file/d/1oGR-ecq-bLc3vLvVyYBmLg95pa2N-sOG/view"
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
