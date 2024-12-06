import React, { useState, useEffect } from "react";
import "./HomeStyle.css";

const Home = () => {
  const [bgColor, setBgColor] = useState("red");
  const [textColor, setTextColor] = useState("orange");
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(true);
  };

  useEffect(() => {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let index = 0;

    const intervalId = setInterval(() => {
      setBgColor(colors[index]);
      index = (index + 1) % colors.length; // Loop through colors
    }, 1000); // Change color every 1 second

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const textColors = ["yellow", "white", "black", "orange", "tomato", "pink"];
    let index = 0;
    const intervalId = setInterval(() => {
      setTextColor(textColors[index]);
      index = (index + 1) % textColors.length;
    }, 500);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);

  return (
    <div style={{ paddingTop: 60 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>
          Welcome to <span>ugliest</span>, <span>most disturbing</span> and{" "}
          <span>off-putting</span> Web page! We will make you regret it 😎
        </h1>
        <h3>TIP: Don't hover on the words above ☝️</h3>
      </div>
      <div className="info" style={{ backgroundColor: bgColor }}>
        <h4 style={{ textDecoration: "underline" }}>Introduction:</h4>
        <h5 style={{ color: textColor }}>
          Welcome to the website created by Al-Khawarezmi for the "Nuit de
          l'informatique" event – a truly unforgettable experience, if by
          unforgettable you mean a visual nightmare. With a design so atrocious,
          it might make you question your life choices. The colors, a disturbing
          mix of neon hues and clashing shades, assault your eyes in ways you
          never thought possible. The vibrant yellows, pinks, and greens blend
          together in an unforgiving display that could give anyone a headache
          in mere seconds. Navigation? Good luck. It’s almost as if every
          element was chosen with the sole purpose of making you regret visiting
          this page. If you’ve managed to endure the blinding chaos of this UI,
          you’ll truly be amazed at the beauty of simplicity in web design –
          something this website has long forgotten.
        </h5>
      </div>
      <div className="shakingDiv">
        <h4>Why choose us?</h4>
        <p>
          When it comes to ugliness, this website stands unmatched—not only on
          the surface web but also on the dark web and even the deep web, where
          aesthetic horrors lurk in shadowy corners. We’ve crafted a page so
          visually disturbing, so chaotically designed, that it transcends the
          limits of bad taste. Every color clash, every unreadable font choice,
          every non-intuitive navigation decision is an intentional act of
          defiance against all principles of web design. You won’t find a more
          garish, headache-inducing interface anywhere on the web, in any hidden
          corner of the internet. This is not just an eyesore; it’s a deliberate
          affront to the senses, an experience so truly horrendous that once
          you've witnessed it, no other website will ever seem quite as dreadful
          again. If you think you've seen bad design, prepare to have your
          expectations shattered by this unparalleled masterpiece of ugliness.
        </p>
      </div>
      <div className="game">
        <h4>
          Now let's play a quick game, are you a winner or just someone who
          hasn’t discovered their victory yet? Let’s find out!
        </h4>
        <p style={{ color: "yellow", fontWeight: "bolder" }}>
          We can see that you love challenges! Let's see if you can click the
          button below
        </p>
        <button>Click me if you dare 😜</button>
      </div>
      <div className="game2">
        <h4>You gave up too quickly!</h4>
        <h4>
          It's okay, we'll give you another chance 😉
          <br />
          There's a number written in the image below, can you read it ?
        </h4>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img src="spirale.gif" />
          <img src="spirale.gif" />
          <input
            type="text"
            placeholder="Did you guess the number?"
            style={{ height: 24 }}
          />
          <button style={{ height: 32, marginTop: 2 }}>✔️</button>
          <button style={{ height: 32, marginTop: 5 }} onClick={handleClick}>
            No, I decided to give up
          </button>
          {showText && (
            <p style={{ marginTop: "20px", fontSize: "18px" }}>
              We tricked you again, there was nothing written in that GIF 🫢
            </p>
          )}
        </div>
      </div>
      <div className="tips">
        <h4 style={{ textDecoration: "underline" }}>Tips for you now</h4>
        <h5>
          We can see your eyes begging for mercy after enduring this masterpiece
          of visual chaos. Don’t worry; we suggest you take a breather, splash
          some cold water on your face, and try to erase the memory of how we
          lured you in with not one, but{" "}
          <span style={{ textDecoration: "underline" }}>
            <i>two gloriously unplayable games</i>
          </span>
          . You're welcome.
        </h5>
      </div>
    </div>
  );
};

export default Home;
