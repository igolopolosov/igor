import * as React from "react";
import { Button } from "../../blocks/Button";
import styles from "./WordReminder.less";

interface WordReminderState {
  newWord: string;
  newSentence: string;
  store: {
    word: string;
    sentence: string;
  }[];
}

export class WordReminder extends React.PureComponent<{}, WordReminderState> {
  constructor(props) {
    super(props);

    this.state = {
      newWord: "",
      newSentence: "",
      store: []
    };
  }

  enterWord = event => {
    event.persist();

    this.setState(() => ({
      newWord: event.target.value
    }));
  };

  enterSentence = event => {
    event.persist();

    this.setState(() => ({
      newSentence: event.target.value
    }));
  };

  addWord = () => {
    this.setState(state => ({
      store: [
        ...state.store,
        {
          sentence: state.newSentence,
          word: state.newWord
        }
      ]
    }));
  };

  render() {
    const { store } = this.state;

    return (
      <>
        <h2>🚧 work in progress 🚧</h2>
        <h3>Add words to reminder</h3>

        <div className={styles.controls}>
          <input placeholder="Type word" onBlur={this.enterWord} />
          <input placeholder="Type sentence" onBlur={this.enterSentence} />
        </div>

        <p>
          <Button tertiary onClick={this.addWord}>
            Add
          </Button>
        </p>

        <p className={styles.reminderList}>
          {store.map(item => {
            const html = item.sentence.replace(
              new RegExp(item.word, "g"),
              `<b>${item.word}</b>`
            );
            return (
              <div
                key={Math.random()}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          })}
        </p>
      </>
    );
  }
}
