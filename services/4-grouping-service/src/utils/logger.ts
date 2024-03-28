import winston from 'winston';

// Define a function to create a logger with a dynamic log level
function winstonLogger(logLevel: string) {
  return winston.createLogger({
    level: logLevel, // Set log level dynamically
    format: winston.format.printf(info => `${info.level}: ${info.message}`), // Define log format without timestamps
    transports: [
      new winston.transports.Console(), // Log to the console
      new winston.transports.File({ filename: 'error.log', level: 'error' }) // Log errors to a file
    ]
  });
}

export default winstonLogger;
