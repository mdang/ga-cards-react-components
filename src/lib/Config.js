class Config {
  static options() {
    // Specify config values here
    return {
      apiUrl: 'https://ga-cards.herokuapp.com'
    }
  }

  static get(key, defaultValue=null) {
    return (this.options()[key]) ? this.options()[key] : defaultValue;
  }
}

export default Config;
