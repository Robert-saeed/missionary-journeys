import Card from "./components/Card";

function Home() {
  return (
    <div className="w-full h-full bg-gray-900 flex justify-center flex-col">

      <Card
        link="first"
        name={"رحلة بولس التبشيرية الاولى"}
        human={
          "شارك في الرحلة الرسول بولس و الرسول برنابا ورافقهما يوحنا المعروف بمرقس"
        }
        stations={[
          "انطاكية",
          "سلوكية",
          "سلاميس",
          "بافوس",
          "برجة",
          "انطاكية بيسيدية",
          "ايقونية",
          "لسترة",
          "دربة",
        ]}
      />

      <Card
        link="second"
        name={"رحلة بولس التبشيرية الثانية"}
        human={
          "شارك في الرحلة الرسول بولس والرسول سيلا وفي دربة و لسترة اخذ بولس تيموثاوس معهم"
        }
        stations={[
          "أنطاكية",
          "دربة و لسترة",
          "ترواس",
          "فيلبي",
          "تسالونيكي",
          "بيرية",
          "أثينا",
          "كورنثوس",
        ]}
      />
      
      <Card
        link="third"
        name={"رحلة بولس التبشيرية الثالثة"}
        human={""}
        stations={["Station 1", "Station 2"]}
      />
    </div>
  );
}

export default Home;
