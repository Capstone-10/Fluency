export default ({ config }) => {
  console.log(config.name); // prints 'My App'
  return {
    ios: {
      bundleIdentifier: "com.hannahgkim.fluency",
    },
  };
};
