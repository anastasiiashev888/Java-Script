const createLogger = () => {
  const memoryLoggers = [];
  function warn(text) {
    const memoryWarn = {
      message: text,
      dateTime: new Date(),
      type: 'warn',
    };
    memoryLoggers.push(memoryWarn);
  }
  function error(text) {
    const memoryError = {
      message: text,
      dateTime: new Date(),
      type: 'error',
    };
    memoryLoggers.push(memoryError);
  }
  function log(text) {
    const memoryLog = {
      message: text,
      dateTime: new Date(),
      type: 'log',
    };
    memoryLoggers.push(memoryLog);
  }

  function getRecords(allLoggers) {
    switch (allLoggers) {
      case 'warn':
        return [...memoryLoggers]
          .filter((el) => el.type === 'warn')
          .sort((a, b) => b.dateTime - a.dateTime);

      case 'error':
        return [...memoryLoggers]
          .filter((el) => el.type === 'error')
          .sort((a, b) => b.dateTime - a.dateTime);

      case 'log':
        return [...memoryLoggers]
          .filter((el) => el.type === 'log')
          .sort((a, b) => b.dateTime - a.dateTime);

      default:
        return memoryLoggers.sort((a, b) => b.dateTime - a.dateTime);
    }
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger = createLogger();
logger.log('User was logged in');
logger.warn('User try  to restricted this page');
logger.log('User was logged out');
logger.error('Unexpected error on this web-site');
console.log(logger.getRecords());
console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords('warn'));
console.log(logger.getRecords());
