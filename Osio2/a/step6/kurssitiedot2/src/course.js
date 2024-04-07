const Course = ({courses}) => {
    const total = courses[0].parts.reduce((s, p) => s + p.exercises, 0)
    const totalNode = courses[1].parts.reduce((s, p) => s + p.exercises, 0)
    return(
    <div>
      <h1>
        Web development Currilucum
      </h1>
      <h2>
        {courses[0].name}
      </h2>
      <p>
        {courses[0].parts[0].name} {courses[0].parts[0].exercises}
      </p>
      <p>
        {courses[0].parts[1].name} {courses[0].parts[1].exercises}
      </p>
      <p>
        {courses[0].parts[2].name} {courses[0].parts[2].exercises}
      </p>
      <p>
        {courses[0].parts[3].name} {courses[0].parts[3].exercises}
      </p>
      <b>
        total of {total} exercises
      </b>
      <h2>
        {courses[1].name}
      </h2>
      <p>
        {courses[1].parts[0].name} {courses[1].parts[0].exercises}
      </p>
      <p>
        {courses[1].parts[1].name} {courses[1].parts[1].exercises}
      </p>
      <b>
        total of {totalNode} exercises
      </b>
    </div>
    )
  }

  export default Course