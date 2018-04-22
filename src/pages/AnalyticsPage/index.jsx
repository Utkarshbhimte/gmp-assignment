import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './AnalyticsPage.css'

class AnalyticsPage extends Component
{
    render() {
        return (
            <div className={`analytics page`}>
                <div className="orgs-list card">
                    <h5>Repos of Angular Organization</h5>
                    <small>These are public repos</small>

                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Url</th>
                            <th>Watchers</th>
                            <th>Open Issues</th>
                        </tr>
                        {
                            this.props.repos && this.props.repos.length > 0 &&
                            [...this.props.repos].map(({name, html_url, watchers_count, open_issues_count}, index) =>
                                <tr>
                                    <td>{index}</td>
                                    <td>{name}</td>
                                    <td><a href={html_url}>{html_url}</a></td>
                                    <td>{watchers_count}</td>
                                    <td>{open_issues_count}</td>
                                </tr>
                            )

                        }
                    </table>
                </div>
            </div>
        );
    }
}

AnalyticsPage.propTypes = {};
AnalyticsPage.defaultProps = {};

export default AnalyticsPage;
