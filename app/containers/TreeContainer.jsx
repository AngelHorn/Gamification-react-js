import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actionsCreators.jsx';
import d3 from 'd3';


const TreeContainer = React.createClass({
  fuck (){

    var w = 1080 - 80,
        h = 600 - 180,
        x = d3.scale.linear().range([0, w]),
        y = d3.scale.linear().range([0, h]),
        color = d3.scale.category20c();
    var treemap = d3.layout.treemap()
        .round(false)
        .size([w, h])
        .sticky(true)
        .value(function(d) { return d.size; });

    var svg = d3.select("#fuckthisshit").html("")
        .attr("class", "chart")
        .style("width", w + "px")
        .style("height", h + "px")
        .append("svg:svg")
        .attr("width", w)
        .attr("height", h)
        .append("svg:g")
        .attr("transform", "translate(.5,.5)");

        function renderMap(root) {
          svg.selectAll('g').remove();
          var nodes;
          if (root.children) {
            nodes = treemap.nodes(root).filter(d => d.parent == root || (d.parent == root && !d.children));
          } else {
            nodes = [root];
          }
          var cell = svg.selectAll('g')
          .data(nodes)
          .enter()
          .append('svg:g')
          .attr('class', 'cell')
          .attr('transform', d => `translate(${d.x}, ${d.y})`)
          .on('click', d => d3.event.button === 0 && zoom(d))
          .on('contextmenu', d => { d3.event.preventDefault(); zoom(root.parent ? root.parent : root);} );

          cell.append('svg:rect')
          .attr('width', d => d.dx - 1)
          .attr('height', d => d.dy)
          .style('fill', d => color(d.name));

          cell.append('svg:text')
          .attr('x', d => d.dx / 2)
          .attr('y', d => d.dy / 2)
          .attr('dy', '.35em')
          .attr('text-anchor', 'middle')
          .text(d => d.name)
          .style('opacity', function(d) { d.w = this.getComputedTextLength(); return d.dx > d.w ? 1 : 0; });
        }

    function zoom(d) {
        var kx = w / d.dx, ky = h / d.dy;
        x.domain([d.x, d.x + d.dx]);
        y.domain([d.y, d.y + d.dy]);
        renderMap(d);
        var t = svg.selectAll("g.cell")
            // .transition()
            // .duration(750)
            .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });
        t.select("rect")
            .attr("width", function(d) { return kx * d.dx; })
            .attr("height", function(d) { return ky * d.dy; })

        t.select("text")
            .attr("x", function(d) { return kx * d.dx / 2; })
            .attr("y", function(d) { return ky * d.dy / 2; })
            .style("opacity", function(d) { return kx * d.dx > d.w ? 1 : 0; });
    }

    function size(d) {
        return d.size;
    }

    function count(d) {
        return 1;
    }

    function arrayToTreeMap(menus) {
        var id = 0,level = 0;
        var menu_objects = [],tree = [],not_root_menu = [];
        for (var menu of menus) {
            var menu_object = {
                name: menu['text'],
                menu: menu,
                children: []
            }
            var id = menu['id'];
            var level = menu['father_id'];
            menu_objects[id] = menu_object;
            if (level) {
                not_root_menu.push(menu_object);
            } else {
                tree.push(menu_object);
            }

        }
        for (var menu_object of not_root_menu) {
            var menu = menu_object['menu'];
            var id = menu['id'];
            var level = menu['father_id'];
            menu_object['size'] = 100;
            if (typeof menu_objects['size'] != 'undefined') {
                delete(menu_objects['size']);
            }
            menu_objects[level]['children'].push(menu_object);
        }
        var treeMap = {name: "Root", children: tree};
        return treeMap;
    }
    // console.log(this.props.quests);
    renderMap(arrayToTreeMap(this.props.quests));
  },
    render () {
      return (
        <div id="fuckthisshit">
          {this.fuck()}
        </div>
      )
    }
})


function mapStateToProps(state) {
  let quests = state.quests;
  return {
      quests,
      current: state.current
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchEditQuest: (quest) => dispatch(actions.fetchEditQuest(quest)),
    onFetchAddQuest: (text,type) => dispatch(actions.fetchAddQuest(text,type)),
    onCompleteQuest: (id) => dispatch(actions.completeQuest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer)
