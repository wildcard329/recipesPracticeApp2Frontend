class ErrorDetector {
    static checkStringLength(string) {
        return string.length > 2;
    }
    static checkPasswordLength(pw) {
        return pw.length > 7;
    }
}

export default ErrorDetector;
