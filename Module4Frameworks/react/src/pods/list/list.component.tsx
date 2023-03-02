import React from "react";
import { Link } from "react-router-dom";
import { MyUserContext } from "../../core/context";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import LinkIcon from "@mui/icons-material/Link";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListComponent: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  //const [page, setPage] = React.useState<number>(0);
  const [memberShown, setMembersShown] = React.useState<MemberEntity[]>([]);
  const { filter, changeFilter, page, setPage } =
    React.useContext(MyUserContext);
  const [numPerPage, setNumPerPage] = React.useState<number>(5);

  let pages = Math.floor(members.length / numPerPage);
  const rem = members.length % numPerPage;
  if (rem > 0) {
    pages = pages + 1;
  }

  React.useEffect(() => {
    search();
  }, []);

  React.useEffect(() => {
    const init = page * numPerPage;
    const final = init + numPerPage;
    setMembersShown(members.slice(init, final));
  }, [page, members]);

  const search = () => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  };

  const setFilter = (event) => {
    changeFilter(event.target.value);
    setPage(0);
  };

  const clickPage = (numPage) => (event) => {
    setPage(numPage);
  };

  return (
    <>
      <h2>Hello from List page</h2>+{" "}
      <Card
        className="SearchBox"
        sx={{ padding: "10px", marginBottom: "20px", width: "400px" }}
      >
        <TextField
          id="outlined-basic"
          label="Enterprise"
          variant="outlined"
          value={filter}
          onChange={setFilter}
        />
        <Button sx={{ marginTop: "10px", marginLeft: "20px" }} variant="contained" onClick={search}>
          Search
        </Button>
      </Card>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {memberShown.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <LinkIcon style={{ color: "blue" }} />
              <Link to={`/detail/${member.login}`}>
                {member.login}
              </Link>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="pages">
        <span>Pages</span>
        {[...Array(pages).keys()].map((key) =>
          key == page ? (
            <span key={key + 1} className="actualKey">
              {key + 1}
            </span>
          ) : (
            <span onClick={clickPage(key)} key={key + 1}>
              {key + 1}
            </span>
          )
        )}
        <span>(Members: {members.length})</span>
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
