import { SplitPane } from 'react-collapse-pane';

const SidebarWithCollapseResize = () => {
  return (
    <SplitPane split='vertical'>
      <div>This is the first div</div>
      <div>This is the second div</div>
      <div>This is the third div</div>
      This is the fourth but not a div!
    </SplitPane>
  );
};

export default SidebarWithCollapseResize;
