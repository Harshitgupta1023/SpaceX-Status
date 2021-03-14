import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";
export default function Launchitem({
  launch: { id, date_local, success, name },
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            MISSION:{" "}
            <span
              className={classNames({
                "text-success": success,
                "text-danger": !success,
              })}
            >
              {name}
            </span>
          </h4>
          <p>
            Launch Date: <Moment format="DD-MM-YYYY HH:mm">{date_local}</Moment>
          </p>
        </div>

        <div className="col-md-3">
          <Link to={`/launch/${id}`} className="btn btn-secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
}
