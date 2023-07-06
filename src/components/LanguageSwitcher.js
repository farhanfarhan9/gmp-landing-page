import React from 'react';
import Cookies from 'js-cookie';

class LanguageSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: Cookies.get('language') || 'en' };
  }

  changeLanguage = (e) => {
    const language = e.target.value;
    this.setState({ language });
    Cookies.set('language', language);
  }

  render() {
    return (
      <select value={this.state.language} onChange={this.changeLanguage}>
        <option value="en">English</option>
        <option value="id">Indonesian</option>
      </select>
    );
  }
}

export default LanguageSwitcher;
