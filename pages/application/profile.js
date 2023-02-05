import Link from "next/link";

const Profilesection = () => {
  return (
    <div>
      <h1>Profile</h1>
      <form action="submit" method="post">
        <section>
          <h2>Personal Information</h2>
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label for="last">Last Name</label>
            <input type="text" id="last" name="last" required />
          </div>
          <div>
            <label for="pname">Preferred Name</label>
            <input type="text" id="pname" name="pname" />
          </div>
          <div>
            <label for="dob">Date of Birth</label>
            <input type="date" id="last" name="last" required />
          </div>
          <div>
            <label for="gender">Preferred Pronouns</label>
            <select name="gender" id="gender" required>
              <option value="female">she/her/hers</option>
              <option value="male">he/him/his</option>
              <option value="non-binary">they/them/theirs</option>
            </select>
          </div>
        </section>
        <section>
          <h2>Address</h2>
          <div>
            <label for="street">Street</label>
            <input type="text" id="street" name="street" required />
          </div>
          <div>
            <label for="town">Town</label>
            <input type="text" id="town" name="town" required />
          </div>
        </section>
        <section>
          <h2>Contact Details</h2>
          <div>
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div>
            <label for="last">Email</label>
            <input type="email" id="last" name="last" />
          </div>
          <div>
            <label for="othrphone">Other Phone Number</label>
            <input type="tel" id="othrphone" name="othrphone" />
          </div>
          <div>
            <label for="last">Other Email</label>
            <input type="email" id="last" name="last" />
          </div>
        </section>
        <section>
          <h2>Scholarship</h2>
          <p>Do you require funding?</p>
          <div>
            <label for="yesScholarship">Yes</label>
            <input type="radio" id="yesScholarship" name="yesScholarship" />
          </div>
          <div>
            <label for="noScholarship">No</label>
            <input type="radio" id="noScholarship" name="noScholarship" />
          </div>
        </section>
      </form>
    </div>
  );
};

export default Profilesection;
