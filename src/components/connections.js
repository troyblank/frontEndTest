import { connect } from 'react-redux';
import TreeComponent from './tree/tree';

const mapStateToProps = (state) => ({ ...state });

export const Tree = connect(mapStateToProps)(TreeComponent);

export default null;
