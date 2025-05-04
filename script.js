// Database siswa dan link PDF
const siswaValid = [
    {
        nama: "1 ",
        nisn: "0074612008",
        pdfUrl: "https://drive.google.com/file/d/1H_ui5JHbs71_qHMrNTw4zjkLt44e6OHq/view"
    },
    {
        nama: "2 ",
        nisn: "0085066642",
        pdfUrl: "https://drive.google.com/file/d/1ZhNC8XjYvDICNDKzYJaAEO9rXrOT2U9I/view"
    },
    {
        nama: "3 ",
        nisn: "0068681070",
        pdfUrl: "https://drive.google.com/file/d/1UGqwSavgIXaRJBlWGBg9PfY52A6tecyF/view"
    },
    {
        nama: "4 ",
        nisn: "0075573035",
        pdfUrl: "https://drive.google.com/file/d/1fV7AR8fhq950mHbUhqyg3iDW0qFt3iRA/view"
    },
    {
        nama: "5 ",
        nisn: "2061400117",
        pdfUrl: "https://drive.google.com/file/d/1JIUJCotNOG5-jBaYsk83g4QoW6d3VonG/view"
    },
    {
        nama: "6 ",
        nisn: "0071966138",
        pdfUrl: "https://drive.google.com/file/d/1Z7aEG4dTNEabp-Q4rQuZ2JkixZe5dHsW/view"
    },
    {
        nama: "7 ",
        nisn: "0067421239",
        pdfUrl: "https://drive.google.com/file/d/1ZyCHe3VdlJ5tGKeomG5x5kxzQFVGcHer/view"
    },
    {
        nama: "8 ",
        nisn: "0078156157",
        pdfUrl: "https://drive.google.com/file/d/1xY_WFYcjS4GYoQxw110UWjETV1WKfcB6/view"
    },
    {
        nama: "9 ",
        nisn: "0076689795",
        pdfUrl: "https://drive.google.com/file/d/1wh8Ao3TRXljeMmb2H71zgmf5qBQxzI2_/view"
    },
    {
        nama: "10 ",
        nisn: "0079583141",
        pdfUrl: "https://drive.google.com/file/d/1Wf5lvQx5MbBWWKLGQV5GTiyGvYdpCXTC/view"
    },
    {
        nama: "11 ",
        nisn: "0066012128",
        pdfUrl: "https://drive.google.com/file/d/1X0MYM285ME6XOqWMuebrYpISK3gvjFz-/view"
    },
    {
        nama: "12 ",
        nisn: "3004520577",
        pdfUrl: "https://drive.google.com/file/d/1I40MaNbdKxBLGlkTaoUZoUewndl7mZVV/view"
    },
    {
        nama: "13 ",
        nisn: "0067142033",
        pdfUrl: "https://drive.google.com/file/d/1qsGefZPSnv-na22rd697ClSoLNermb6i/view"
    },
    {
        nama: "14 ",
        nisn: "0066338958",
        pdfUrl: "https://drive.google.com/file/d/1lHLwZgye1xwU14AjGKNac_svffUm7uoh/view"
    },
    {
        nama: "15 ",
        nisn: "0086240022",
        pdfUrl: "https://drive.google.com/file/d/1Mt0qjDdmazLCT0wdp8wUvv96-bGHa7fD/view"
    },
    {
        nama: "16 ",
        nisn: "0061847839",
        pdfUrl: "https://drive.google.com/file/d/1affHBtMk9Y4UaZLe8xYhNxLcDl8ayW4V/view"
    },
    {
        nama: "17 ",
        nisn: "0078830337",
        pdfUrl: "https://drive.google.com/file/d/1vCOQmEkDNgpg5Qf2VrLo9DJRCpTR4DLS/view"
    },
    {
        nama: "18 ",
        nisn: "0074610024",
        pdfUrl: "https://drive.google.com/file/d/1ragG-9V7bn5SwoRZlysbqlLqK3MELSEK/view"
    },
    {
        nama: "19 ",
        nisn: "0076093937",
        pdfUrl: "https://drive.google.com/file/d/1RLNQpRQhNW59tbKGR078OuEJb5AYmn8b/view"
    },
    {
        nama: "20 ",
        nisn: "0062534640",
        pdfUrl: "https://drive.google.com/file/d/1nWtXgAyCCTkMh3WY73Zv7ghGS61m5H7k/view"
    },
    {
        nama: "21 ",
        nisn: "3079684829",
        pdfUrl: "https://drive.google.com/file/d/1Vor7wv8p8qjUBp33NicB-3nKUTxax9at/view"
    },
    {
        nama: "22 ",
        nisn: "0063104924",
        pdfUrl: "https://drive.google.com/file/d/1T4EsSg0XqUlni4_jti_Noip_ObDS05le/view"
    },
    {
        nama: "23 ",
        nisn: "0077787202",
        pdfUrl: "https://drive.google.com/file/d/1-5vud2re_gO9qhcQvAsnwqGzXNh6UPzC/view"
    },
    {
        nama: "24 ",
        nisn: "0067205760",
        pdfUrl: "https://drive.google.com/file/d/1z2X-WLwIOjBag0BJr2ZUW-JCDYhaMLTn/view"
    },
    {
        nama: "25 ",
        nisn: "0078486551",
        pdfUrl: "https://drive.google.com/file/d/1EljvbR9yhG-h1PkoTPWlfgVfDF670MVf/view"
    },
    {
        nama: "26 ",
        nisn: "0065269701",
        pdfUrl: "https://drive.google.com/file/d/1RzAE9FfB3wCWjlk8uLVGpvrJUoLLmmEB/view"
    },
    {
        nama: "27 ",
        nisn: "0074236363",
        pdfUrl: "https://drive.google.com/file/d/1u8X6QRGekvtnEUnm3BtIjoduT83dZNmK/view"
    },
    {
        nama: "28 ",
        nisn: "0067713317",
        pdfUrl: "https://drive.google.com/file/d/1pP9MGKhF-QxFq1FkXuHVAnliLscM7PhI/view"
    },
    {
        nama: "29 ",
        nisn: "0072810784",
        pdfUrl: "https://drive.google.com/file/d/1Utkhv42NxCOsETJwDR8kFyr7LwJXG3S9/view"
    },
    {
        nama: "30 ",
        nisn: "0075656559",
        pdfUrl: "https://drive.google.com/file/d/1-ahzmXBnNCZM1UC0ftfcuHRODe9BJKoz/view"
    },
    {
        nama: "31 ",
        nisn: "0075000849",
        pdfUrl: "https://drive.google.com/file/d/1ECszO4NGdpN1t54au_1bL7yRIp0bZpP0/view"
    },
    {
        nama: "32 ",
        nisn: "0068586224",
        pdfUrl: "https://drive.google.com/file/d/1rrfpOZyIgeiF1VvydpKcIMieUlOCDYV3/view"
    },
    {
        nama: "33 ",
        nisn: "0069767232",
        pdfUrl: "https://drive.google.com/file/d/1wIJjm20E51-Xwfz6RaW2m30OY0hJf0Rp/view"
    },
    {
        nama: "34 ",
        nisn: "0061961982",
        pdfUrl: "https://drive.google.com/file/d/1IwsVQGhSSV9I203gJgbWVu-l3akmfhhg/view"
    },
    {
        nama: "35 ",
        nisn: "0068630596",
        pdfUrl: "https://drive.google.com/file/d/1yYENJoM3kPqIRL0NROFnUypEvqmZEdnd/view"
    },
    {
        nama: "36 ",
        nisn: "0065795763",
        pdfUrl: "https://drive.google.com/file/d/1V62v3pwRIoQFpxqdH62iHqpxs6We9LSP/view"
    },
    {
        nama: "37 ",
        nisn: "0073818429",
        pdfUrl: "https://drive.google.com/file/d/1Ghe1t1FiyduR3YUwiR_2u3FlIMeIvhaL/view"
    },
    {
        nama: "38 ",
        nisn: "0081647612",
        pdfUrl: "https://drive.google.com/file/d/1YFS4frIt0jm3SBO6wf678OV9geoMYnCH/view"
    },
    {
        nama: "39 ",
        nisn: "0072671637",
        pdfUrl: "https://drive.google.com/file/d/1lpOK601ikJzQZRjuup4u6YIarD2pgjn2/view"
    },
    {
        nama: "40 ",
        nisn: "0081288001",
        pdfUrl: "https://drive.google.com/file/d/1IfnOdPBAwPZkZhmkBanTZLiEcPVsF0gc/view"
    },
    {
        nama: "41 ",
        nisn: "0078128276",
        pdfUrl: "https://drive.google.com/file/d/1V__CS-8j6i40ffrJKO4KORHDSMIl-Fz7/view"
    },
    {
        nama: "42 ",
        nisn: "0079115931",
        pdfUrl: "https://drive.google.com/file/d/1uV0V1eiVgGxAV2RsqKtU_PjmAAZ0kE1x/view"
    },
    {
        nama: "43 ",
        nisn: "0079986960",
        pdfUrl: "https://drive.google.com/file/d/1ljNBLmEFLdNbO50VF0KACAfh4BreoTJQ/view"
    },
    {
        nama: "44 ",
        nisn: "0079163380",
        pdfUrl: "https://drive.google.com/file/d/1EGJNBcu7eRHREjSwCmqu7D9-lOOH-wPc/view"
    },
    {
        nama: "45 ",
        nisn: "0135595763",
        pdfUrl: "https://drive.google.com/file/d/1H3z62aEMZ3dviMcDTIJTvA2DpUmX_lWB/view"
    },
    {
        nama: "46 ",
        nisn: "0071906613",
        pdfUrl: "https://drive.google.com/file/d/1GImWfPhaG5XG59ck8govfUc4V0on4Dft/view"
    },
    {
        nama: "47 ",
        nisn: "0078780823",
        pdfUrl: "https://drive.google.com/file/d/1jGhMr2Xrmoi4o8Km1BR5Gw0vU9UGwPe_/view"
    },
    {
        nama: "48 ",
        nisn: "0072292458",
        pdfUrl: "https://drive.google.com/file/d/1he1oID0KdKsH-e9vavKU_dol3BEaYifm/view"
    },
    {
        nama: "49 ",
        nisn: "0072309187",
        pdfUrl: "https://drive.google.com/file/d/1Kb0P0mk744bwGEwWzS-8M225Tg2xdhA4/view"
    },
    {
        nama: "50 ",
        nisn: "0064377750",
        pdfUrl: "https://drive.google.com/file/d/1qyGS4J3L1X7iQU1ImLOCekMKoswUnriU/view"
    },
    {
        nama: "51 ",
        nisn: "0078476017",
        pdfUrl: "https://drive.google.com/file/d/1y3zSRfWZGEHTo4btyU9xt25teRKnOFiE/view"
    },
    {
        nama: "52 ",
        nisn: "0078618347",
        pdfUrl: "https://drive.google.com/file/d/1zCJXutEdcj2FucxjLZ6Pf0_r-NC_BFlA/view"
    },
    {
        nama: "53 ",
        nisn: "0061878202",
        pdfUrl: "https://drive.google.com/file/d/1DhtBaAvEXyB6dj0Ac_SGZd6a0vBUZQPv/view"
    },
    {
        nama: "54 ",
        nisn: "0066688497",
        pdfUrl: "https://drive.google.com/file/d/1fcEYmla1FGYIYQ_JTC-hK4GrY0je9NUX/view"
    },
    {
        nama: "55 ",
        nisn: "0076636539",
        pdfUrl: "https://drive.google.com/file/d/1CxcHPis-P8ZJU1jn60rVEtRQNRX7nkOI/view"
    },
    {
        nama: "56 ",
        nisn: "0069108187",
        pdfUrl: "https://drive.google.com/file/d/1KwWY-1BpVyfZufw9S0gQLuhXVbtAMil_/view"
    },
    {
        nama: "57 ",
        nisn: "0079175114",
        pdfUrl: "https://drive.google.com/file/d/1C0-LlhF4RK2k5SB9MaV4jkcGGczUXRaY/view"
    },
    {
        nama: "58 ",
        nisn: "0065757406",
        pdfUrl: "https://drive.google.com/file/d/1TwLk2tUvJDoagTky2Nnahiycsy6joq1A/view"
    },
    {
        nama: "59 ",
        nisn: "0064960030",
        pdfUrl: "https://drive.google.com/file/d/18_qnGUIjrjAYbrWEFIjSzu9zbuKtpCAU/view"
    },
    {
        nama: "60 ",
        nisn: "0079046458",
        pdfUrl: "https://drive.google.com/file/d/1Clx188UKvMclgxlUlDaw-dvLqtlGd4d9/view"
    },
    {
        nama: "61 ",
        nisn: "0078757916",
        pdfUrl: "https://drive.google.com/file/d/1pI1KtB8BDZoX6q_1GqiK3fHYXbUr1GUQ/view"
    },
    {
        nama: "62 ",
        nisn: "0063721913",
        pdfUrl: "https://drive.google.com/file/d/1d4JeiPQnmaKrbHAuos2qoBzJqFC0GbIJ/view"
    },
    {
        nama: "63 ",
        nisn: "0079078431",
        pdfUrl: "https://drive.google.com/file/d/1zWMdtqLUBVxi97PFklyfyNLivRSPoD1s/view"
    },
    {
        nama: "64 ",
        nisn: "0063008988",
        pdfUrl: "https://drive.google.com/file/d/1XGWsvsCTpDyUQtdgtWqFDSp38D65usN8/view"
    },
    {
        nama: "65 ",
        nisn: "0069522070",
        pdfUrl: "https://drive.google.com/file/d/1FT8TpqNwy3hHYmESayJR2aZwlasiQqsS/view"
    },
    {
        nama: "66 ",
        nisn: "0065578186",
        pdfUrl: "https://drive.google.com/file/d/1BnN0RioTA8D7anQOEek8doIWNYgNVD82/view"
    },
    {
        nama: "67 ",
        nisn: "0067865363",
        pdfUrl: "https://drive.google.com/file/d/1eXO_IK2YU01_h8-wvJeT6UCjzwzQWrN5/view"
    },
    {
        nama: "68 ",
        nisn: "0079023301",
        pdfUrl: "https://drive.google.com/file/d/1Pv1PDpwbj5heiSlET9VkQ8ZADtjBDmzA/view"
    },
    {
        nama: "69 ",
        nisn: "0061204526",
        pdfUrl: "https://drive.google.com/file/d/1P5nfMLXh3GeKCyW8W_SkoqgqeEngamxI/view"
    },
    {
        nama: "70 ",
        nisn: "0072191618",
        pdfUrl: "https://drive.google.com/file/d/1z-Ax2TvsMVdXVET0VDsJ8VwRjf-rxGnQ/view"
    },
    {
        nama: "71 ",
        nisn: "0088461589",
        pdfUrl: "https://drive.google.com/file/d/1TVKbyvc7mwC8ylnE7RoX4jsaJLAhAb1a/view"
    },
    {
        nama: "72 ",
        nisn: "0062513982",
        pdfUrl: "https://drive.google.com/file/d/1V_MqVcyNxJG09oARKyl6ZyoUc6pKSzd8/view"
    },
    {
        nama: "73 ",
        nisn: "0069425508",
        pdfUrl: "https://drive.google.com/file/d/1Hi1M5Au2LS1GAI9qpGGxw2_a3FqIHusE/view"
    },
    {
        nama: "74 ",
        nisn: "0075252271",
        pdfUrl: "https://drive.google.com/file/d/1vVVCefd99ZknZQuylzcqY4tRzrw94P8P/view"
    },
    {
        nama: "75 ",
        nisn: "0069374083",
        pdfUrl: "https://drive.google.com/file/d/1EGpgFao64O0ejlw1f3-AU0JUJvoIaDOg/view"
    },
    {
        nama: "76 ",
        nisn: "0073437534",
        pdfUrl: "https://drive.google.com/file/d/1Bp-iNhrxTXJHrracg1XfCHiu478XiDqt/view"
    },
    {
        nama: "77 ",
        nisn: "0068380347",
        pdfUrl: "https://drive.google.com/file/d/1d_L1G968wNPZAcP1KI2j6kqTizZiCBsg/view"
    },
    {
        nama: "78 ",
        nisn: "0069496231",
        pdfUrl: "https://drive.google.com/file/d/1XcBqJs2_lp7zUzJ5v4pHTegvSKElaADT/view"
    },
    {
        nama: "79 ",
        nisn: "0063098736",
        pdfUrl: "https://drive.google.com/file/d/1lg0doUpvgbVW25U_eZfRtDeBZcTMTiMP/view"
    },
    {
        nama: "80 ",
        nisn: "0073881599",
        pdfUrl: "https://drive.google.com/file/d/17gYt1JzjR8RRN3LCgPZ-zsmolyd_s2fE/view"
    },
    {
        nama: "81 ",
        nisn: "0075447894",
        pdfUrl: "https://drive.google.com/file/d/1SRCKNdcR6cYvMUmdEcmYtT64WmSipx3m/view"
    },
    {
        nama: "82 ",
        nisn: "0079162119",
        pdfUrl: "https://drive.google.com/file/d/1Zk-FjmIxK3Vlgd9iwPvIEzQCNuilDIj5/view"
    },
    {
        nama: "83 ",
        nisn: "0072334126",
        pdfUrl: "https://drive.google.com/file/d/1PfxVKekwSFtgNoK8Yf5uLXCgAUv87Ohc/view"
    },
    {
        nama: "84 ",
        nisn: "0068635482",
        pdfUrl: "https://drive.google.com/file/d/1zEAMLYB04IA-ogk0237eOEnFBeEY_NlI/view"
    },
    {
        nama: "85 ",
        nisn: "0079489532",
        pdfUrl: "https://drive.google.com/file/d/1J4wF6SgyVwDnVXY7YAPsB4oZavWlmi6M/view"
    },
    {
        nama: "86 ",
        nisn: "0063517668",
        pdfUrl: "https://drive.google.com/file/d/1GN_IfpQqrE4aLR9Cdb4_itgZnLbQkEnS/view"
    },
    {
        nama: "87 ",
        nisn: "0071296770",
        pdfUrl: "https://drive.google.com/file/d/1HmPlsZ98-D5PpXhpM9XLGRTCOnXhKLqo/view"
    },
    {
        nama: "88 ",
        nisn: "0068203013",
        pdfUrl: "https://drive.google.com/file/d/1beQEeuYom1f4vcIJ_pUMZqGZ31XX4-On/view"
    },
    {
        nama: "89 ",
        nisn: "0065103624",
        pdfUrl: "https://drive.google.com/file/d/1sBKNTyRaBg-7H-p882aA0uO2uCBXQmDZ/view"
    },
    {
        nama: "90 ",
        nisn: "0079929086",
        pdfUrl: "https://drive.google.com/file/d/1f_5vf88RmMTsNTRZBSC2LGDJ_tD3-yz8/view"
    },
    {
        nama: "91 ",
        nisn: "0066914533",
        pdfUrl: "https://drive.google.com/file/d/193L4hRhGgBzvPywk0sy7YUe5hzy6yx4K/view"
    },
    {
        nama: "92 ",
        nisn: "0079935570",
        pdfUrl: "https://drive.google.com/file/d/1dkOFFUs3zu5ZFYCT9YhorQ_iMyD5Spwa/view"
    },
    {
        nama: "93 ",
        nisn: "0061464412",
        pdfUrl: "https://drive.google.com/file/d/1TrMq4lxyZl0L-CpNK0qRvPsOYHkyGNSE/view"
    },
    {
        nama: "94 ",
        nisn: "0079136166",
        pdfUrl: "https://drive.google.com/file/d/1rHtsLldpvTf6r-tk13z5el0HX2fyloxU/view"
    },
    {
        nama: "95 ",
        nisn: "0074832367",
        pdfUrl: "https://drive.google.com/file/d/1NoURm39sL_OFdsaBsLCO50-j2FFqleQb/view"
    },
    {
        nama: "96 ",
        nisn: "0084223998",
        pdfUrl: "https://drive.google.com/file/d/1fWBbjp3Ts7sj5L8pRU0Q7nwckxIOs56g/view"
    },
    {
        nama: "97 ",
        nisn: "0063325643",
        pdfUrl: "https://drive.google.com/file/d/1994FB4puAKHftGZyvxbqV4YvF7cFTPuR/view"
    },
    {
        nama: "98 ",
        nisn: "0075177476",
        pdfUrl: "https://drive.google.com/file/d/1dDT_z5kWvq_213adSGWQig2fH7c0Kdci/view"
    },
    {
        nama: "99 ",
        nisn: "0073742066",
        pdfUrl: "https://drive.google.com/file/d/1THtIxz0bZMXeIKhVsQaokq_amfAyOQug/view"
    },
    {
        nama: "100 ",
        nisn: "0072078691",
        pdfUrl: "https://drive.google.com/file/d/1tVH6bT8pplLmmF8HFwLluYUs7Ss8UmYL/view"
    },
    {
        nama: "101 ",
        nisn: "0076998250",
        pdfUrl: "https://drive.google.com/file/d/1SPI5jaJarMuxfuJINlOXWlMoxP6YNKJc/view"
    },
    {
        nama: "102 ",
        nisn: "0073404705",
        pdfUrl: "https://drive.google.com/file/d/1eQZQKecMPTS4VVIWwRfDOdOk_-9Eoxq2/view"
    },
    {
        nama: "103 ",
        nisn: "0078022258",
        pdfUrl: "https://drive.google.com/file/d/18igUBv4K8EhHwbNXrcQuHoqBVbsC40QO/view"
    },
    {
        nama: "104 ",
        nisn: "0066862771",
        pdfUrl: "https://drive.google.com/file/d/1S0oNdRxuf6c_AWttiDN_ZJammkNd5ihk/view"
    },
    {
        nama: "105 ",
        nisn: "0073778499",
        pdfUrl: "https://drive.google.com/file/d/16fhkByZxjBXm0ty6V0mrwefAIsYFww58/view"
    },
    {
        nama: "106 ",
        nisn: "0064465305",
        pdfUrl: "https://drive.google.com/file/d/10_it5p7AcruC6YMML05LVAbcUYVyegEK/view"
    },
    {
        nama: "107 ",
        nisn: "0067637936",
        pdfUrl: "https://drive.google.com/file/d/1YOzFT5W2rl4X-nEfqE2w-92m2V7SbIzg/view"
    },
    {
        nama: "108 ",
        nisn: "0066168594",
        pdfUrl: "https://drive.google.com/file/d/1aR4bD7z6ExaPx0t83LUwvzATIcrIQ8GJ/view"
    },
    {
        nama: "109 ",
        nisn: "0069008466",
        pdfUrl: "https://drive.google.com/file/d/1mJRM-CBZXvWS_yDkc2bPiSqVYh-s3FJm/view"
    },
    {
        nama: "110 ",
        nisn: "0073519931",
        pdfUrl: "https://drive.google.com/file/d/1DkLC0w5hEzcrC-JnYIfrlstf2V_SQjAb/view"
    },
    {
        nama: "111 ",
        nisn: "0074208226",
        pdfUrl: "https://drive.google.com/file/d/1D9VbpSSR-8p6rxnO6z3CdKhn_pC6EOoK/view"
    },
    {
        nama: "112 ",
        nisn: "0069265912",
        pdfUrl: "https://drive.google.com/file/d/1PbLFH69znI3fAqoLYRg5wN6dPsKXptyJ/view"
    },
    {
        nama: "113 ",
        nisn: "0067785320",
        pdfUrl: "https://drive.google.com/file/d/1uNQPmjjSbuPzu4J7BKfVypNn3xKOKyTf/view"
    },
    {
        nama: "114 ",
        nisn: "0071628200",
        pdfUrl: "https://drive.google.com/file/d/1O9vZtVpbRMn_3AHEJFQreWv_eaQq2yWy/view"
    },
    {
        nama: "115 ",
        nisn: "2063530941",
        pdfUrl: "https://drive.google.com/file/d/1tebz3eXuH6V9NXaDBioi-Si2ZubLGQla/view"
    },
    {
        nama: "116 ",
        nisn: "0064142643",
        pdfUrl: "https://drive.google.com/file/d/1QsLbtpYVrDOCxzL4HgxyztrN7vQ38ioV/view"
    },
    {
        nama: "117 ",
        nisn: "0074122983",
        pdfUrl: "https://drive.google.com/file/d/11TrQkb-xRY53LvYNd3lUji1Szzui4Wc8/view"
    },
    {
        nama: "118 ",
        nisn: "0067781209",
        pdfUrl: "https://drive.google.com/file/d/1iCBUYHdKN4kz65oi_uk1uOBVdmwhKRM7/view"
    },
    {
        nama: "119 ",
        nisn: "0075807518",
        pdfUrl: "https://drive.google.com/file/d/18hKDZjFJpo11ayErmaDmKWWBW_k3HMBH/view"
    },
    {
        nama: "120 ",
        nisn: "0073572128",
        pdfUrl: "https://drive.google.com/file/d/1UkGjquyIdCY3TnarvCBz-0Yt55_BXrRb/view"
    },
    {
        nama: "121 ",
        nisn: "0078112662",
        pdfUrl: "https://drive.google.com/file/d/1qfAlmpGBBGfLdccXna2QhCcVgUo8DyZL/view"
    },
    {
        nama: "122 ",
        nisn: "0078850653",
        pdfUrl: "https://drive.google.com/file/d/1LL3HlLApGjFjliOldH2gJ9P_rYBjmWPU/view"
    },
    {
        nama: "123 ",
        nisn: "0073110565",
        pdfUrl: "https://drive.google.com/file/d/1lt-NzHa5kf8Z93nbeG9SspLt5RSTD5-T/view"
    },
    {
        nama: "124 ",
        nisn: "0077305484",
        pdfUrl: "https://drive.google.com/file/d/1RKBIdgvTd9lvfxwaPSLoURCtjdaTBlFz/view"
    },
    {
        nama: "125 ",
        nisn: "0067855402",
        pdfUrl: "https://drive.google.com/file/d/1cPqBHWXNH7iJw0PMj-_ABp_vcqszDl4p/view"
    },
    {
        nama: "126 ",
        nisn: "0074347176",
        pdfUrl: "https://drive.google.com/file/d/18NGRdCqolqdMcNiQQo8o4fPM3PBIfyPr/view"
    },
    {
        nama: "127 ",
        nisn: "0079659630",
        pdfUrl: "https://drive.google.com/file/d/1-jQUIyZ_tlm1OmRASf_EvLjU_Q_RXISk/view"
    },
    {
        nama: "128 ",
        nisn: "0067907665",
        pdfUrl: "https://drive.google.com/file/d/1BdgDvwc4yoKkxrTIceDdDbXgSNy5dyc-/view"
    },
    {
        nama: "129 ",
        nisn: "0053715602",
        pdfUrl: "https://drive.google.com/file/d/1M_jUKktqcEYArMcLNdc7_-Y9KP7Ed_I_/view"
    },
    {
        nama: "130 ",
        nisn: "0071958870",
        pdfUrl: "https://drive.google.com/file/d/12j2IwstB7ZD4PDZcIWpZGsp-cu_vya7x/view"
    },
    {
        nama: "131 ",
        nisn: "0074808443",
        pdfUrl: "https://drive.google.com/file/d/1nsIIEKQkKdx7FvYIEZX9UqSVCiU0gOfG/view"
    },
    {
        nama: "132 ",
        nisn: "0067400978",
        pdfUrl: "https://drive.google.com/file/d/1TgdP534hmZ04J7uE7wNBM1kCJDYbp77d/view"
    }
];

function checkAccessTime() {
    const now = new Date();
    const targetDate = new Date('2025-05-05T16:00:00+08:00'); // 16:00 WITA (UTC+8)
    
    return now >= targetDate;
}

document.getElementById('formKelulusan').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!checkAccessTime()) {
        alert("Pengumuman kelulusan akan tersedia mulai 16:00 WITA, 5 Mei 2025");
        return;
    }
    
    const nisn = document.getElementById('nisn').value.trim();
    const siswa = siswaValid.find(s => s.nisn === nisn);
    
    if (siswa) {
        window.location.href = siswa.pdfUrl;
    } else {
        alert("NISN tidak ditemukan!");
    }
});

// Countdown timer
function updateCountdown() {
    const targetDate = new Date('2025-05-05T16:00:00+08:00');
    const now = new Date();
    const diff = targetDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').innerHTML = `
            Pengumuman akan dibuka dalam:<br>
            <span style="font-size: 1.5em;">${days} hari ${hours} jam ${minutes} menit ${seconds} detik</span>
        `;
    } else {
        document.getElementById('countdown').innerHTML = "Pengumuman kelulusan telah dibuka!";
    }
}

// Jalankan countdown setiap detik jika belum waktunya
if (!checkAccessTime()) {
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Panggil sekali saat pertama kali load
} else {
    document.getElementById('countdown').innerHTML = "Pengumuman kelulusan telah dibuka!";
}
