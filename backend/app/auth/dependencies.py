from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.user import User
from app.auth.jwt_handler import verify_access_token


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/auth/login"
)


def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
):
    """
    Returns the currently logged-in user.
    """

    print("\n========== CURRENT USER ==========")
    print("Raw Token:")
    print(token)
    print("==================================")

    payload = verify_access_token(token)

    print("Payload Returned:")
    print(payload)

    if payload is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or Expired Token"
        )

    user_id = payload.get("sub")

    print("User ID:", user_id)

    if user_id is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token missing user id"
        )

    user = (
        db.query(User)
        .filter(User.id == int(user_id))
        .first()
    )

    print("Database User:", user)

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found"
        )

    print("========== USER VERIFIED ==========\n")

    return user