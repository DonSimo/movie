class ApiError(Exception):
    def __init__(self, message) -> None:
        self.message = message


class ValidationError(Exception):
    def __init__(self, message) -> None:
        super().__init__(message)
