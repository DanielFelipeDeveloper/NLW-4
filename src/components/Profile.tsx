import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEIHeQQSqC6iA/profile-displayphoto-shrink_800_800/0/1596681802211?e=1620259200&v=beta&t=gQqtMeXniKTdUz1kzVJyzHN-FSvFfoat_xyZB7mBgaY" alt="Daniel Felipe"/>
      <div>
        <strong>Daniel Felipe</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}