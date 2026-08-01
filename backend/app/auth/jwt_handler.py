from datetime import datetime, timedelta, timezone

from jose import jwt, JWTError

from app.config import settings


def create_access_token(data: dict):
    """
    Create JWT Access Token
    """

    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + timedelta(
        minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(
        to_encode,
        settings.SECRET_KEY,
        algorithm=settings.ALGORITHM
    )

    return encoded_jwt


def verify_access_token(token: str):
    """
    Verify JWT Access Token
    """

    try:
        print("\n========== JWT DEBUG ==========")
        print("Received Token:")
        print(token)
        print("--------------------------------")

        print("SECRET_KEY:")
        print(settings.SECRET_KEY)
        print("--------------------------------")

        print("ALGORITHM:")
        print(settings.ALGORITHM)
        print("--------------------------------")

        payload = jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[settings.ALGORITHM]
        )

        print("Decoded Payload:")
        print(payload)
        print("========== SUCCESS ==========\n")

        return payload

    except JWTError as e:
        print("\n========== JWT ERROR ==========")
        print(str(e))
        print("========== END ERROR ==========\n")

        return None