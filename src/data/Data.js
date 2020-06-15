// @material-ui/icons
import HomeIcon from "@material-ui/icons/Home";
import TodayIcon from "@material-ui/icons/Today";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

export const ListData = [
  {
    url: "/index",
    name: "Anasayfa",
    icon: <HomeIcon />,
  },
  {
    url: "/calendar",
    name: "Ders Programı",
    icon: <TodayIcon />,
  },
  {
    url: "/book",
    name: "Kitaplarım",
    icon: <MenuBookIcon />,
  },
  {
    url: "/question",
    name: "Soru bankası",
    icon: <HelpOutlineIcon />,
  },
  {
    url: "/about",
    name: "Hakkımızda",
    icon: "about",
  },
];

export const cardData = 
  {
    solvedQuestions: {
      total: "27896",
      week: "1453",
      date: "(Toplam | Haftalık)",
      text: "Çözülen Soru",
    },
    targets: {
      booksTargets: "0%",
      questionsTargets: "0%",
      questionsOrBooks: "(Soru | Kitap)",
      text: "Günlük Tamamlanan Hedef",
    },
    questionRecord: {
      record: "587",
      date: "(03 May 2020)",
      text: "Günlük Çözülen Soru Rekoru",
    },
    bookRecord: {
      record: "115 ",
      date: "(04 May 2020)",
      text: "Günlük Okunan Sayfa Rekoru",
    },
  }
;
