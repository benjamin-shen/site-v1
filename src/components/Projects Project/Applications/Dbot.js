import React from "react";
import Project from "../../Project";

const Dbot = ({ wip }) => {
  return (
    <Project
      title="Dbot"
      description="GroupMe Bot with Library of Commands and Keywords"
      content={
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/benjamin-shen/dbot"
          >
            Github
          </a>
          <p>
            Dbot is a GroupMe bot I built for one of my group chats at Cornell.
            There are a number of understood commands and functions, ranging
            from fun (
            <code title="funny quote from a random member">glozz -ism</code> and{" "}
            <code title="loser gets kicked from the groupchat">tussle</code>) to
            practical (<code title="the next bus time">bus</code> and{" "}
            <code title="the current weather or weather forecast">weather</code>
            ) to questionable (
            <code title="attempts to translate previous message(s)">
              translate
            </code>{" "}
            and{" "}
            <code title="reveals the true identity of the last sender">
              identify
            </code>
            ). Dbot also responds to secret keywords if it detects them in any
            messages. We have many inside jokes, and I attempt to bring humor
            and discussion through Dbot's (sometimes unexpected) responses.
          </p>
          <p>
            The bot is built with Python. I used Python Flask to host a webhook
            on Heroku. The responses are generated in various ways; many use
            GroupMe's REST API, some use third-party APIs, some use third-party
            Python packages, and one scrapes the web. I test Dbot with a{" "}
            <code>debug</code> flag, in a test environment / group chat. Much of
            the application is data-driven, so it's easy to add commands, change
            keywords, and update content. I maintain Dbot and add new
            functionality every year.
          </p>
        </div>
      }
      wip={wip}
    />
  );
};

export default Dbot;
