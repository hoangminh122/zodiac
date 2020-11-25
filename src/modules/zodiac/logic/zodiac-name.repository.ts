import { ZODIAC_NAME } from "src/shared/enum/zodiac-name.enum";


export const nameZodiac = (day, month) => {
    switch (month) {
        case 1:
            if (day < 20)
                return ZODIAC_NAME.CapricornHestia                      //ma_ket
            else
                return ZODIAC_NAME.AquariusHera;                      //bao_binh
        case 2:
            if (day < 19)
                return ZODIAC_NAME.AquariusHera                      //bao_binh
            else
                return ZODIAC_NAME.PiscesPoseidon;                      //song_ngu
        case 3:
            if (day < 21)
                return ZODIAC_NAME.PiscesPoseidon                      //song_ngu
            else
                return ZODIAC_NAME.AriesAthena;                      //bach duong
        case 4:
            if (day < 21)
                return ZODIAC_NAME.PiscesPoseidon                      //bach_duong
            else
                return ZODIAC_NAME.TaurusAphrodite;                  //kim_nguu
        case 5:
            if (day < 21)
                return ZODIAC_NAME.TaurusAphrodite                      //kim_nguu
            else
                return ZODIAC_NAME.PiscesPoseidon;                  //song_tu
        case 6:
            if (day < 21)
                return ZODIAC_NAME.PiscesPoseidon                      //song_tu
            else
                return ZODIAC_NAME.CancerHermes;                  //cu_giai
        case 7:
            if (day < 23)
                return ZODIAC_NAME.CancerHermes                      //cu_giai
            else
                return ZODIAC_NAME.LeoZeus;                  //su_tu
        case 8:
            if (day < 23)
                return ZODIAC_NAME.LeoZeus                     //su_tu
            else
                return ZODIAC_NAME.VirgoDemeter;                  //xu_nu
        case 9:
            if (day < 23)
                return ZODIAC_NAME.VirgoDemeter                     //xu_nu
            else
                return ZODIAC_NAME.LibraHephaestus;                  //thien_binh
        case 10:
            if (day < 24)
                return ZODIAC_NAME.LibraHephaestus                     //thien_binh
            else
                return ZODIAC_NAME.ScorpiusAres;                  //bo_cap
        case 11:
            if (day < 23)
                return ZODIAC_NAME.ScorpiusAres                     //bo_cap
            else
                return ZODIAC_NAME.SagittariusArtemis;                  //nhan_ma
        case 12:
            if (day < 22)
                return ZODIAC_NAME.SagittariusArtemis                     //nhan_ma
            else
                return ZODIAC_NAME.CapricornHestia;                  //ma_ket
    }
}