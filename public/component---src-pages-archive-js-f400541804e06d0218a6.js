(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    nRki: function(e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'pageQuery', function() {
          return J;
        });
      var a = n('q1tI'),
        r = n.n(a),
        l = n('TJpk'),
        i = n('nLfd'),
        c = n('8SHQ'),
        o = n('Kvkj'),
        u = n('g67X'),
        f = n('vOnD'),
        m = n('InJ6');
      function s() {
        var e = k(['\n        font-size: ', ';\n      ']);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = k(['\n      padding: 10px;\n    ']);
        return (
          (p = function() {
            return e;
          }),
          e
        );
      }
      function h() {
        var e = k(['\n      display: none;\n    ']);
        return (
          (h = function() {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = k(['\n    margin: 100px -10px;\n  ']);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = k(['font-size: ', ';']);
        return (
          (g = function() {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = k(['font-size: ', ';']);
        return (
          (b = function() {
            return e;
          }),
          e
        );
      }
      function E() {
        var e = k(['font-size: 40px;']);
        return (
          (E = function() {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = k(['font-size: 50px;']);
        return (
          (v = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = k(['font-size: 60px;']);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = k(['font-size: 70px;']);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = k(['\n    margin-top: 150px;\n  ']);
        return (
          (w = function() {
            return e;
          }),
          e
        );
      }
      function k(e, t) {
        return t || (t = e.slice(0)), (e.raw = t), e;
      }
      var N = m.h.colors,
        _ = m.h.fonts,
        z = m.h.fontSizes,
        C = Object(f.c)(m.d).withConfig({
          displayName: 'archive__StyledMainContainer',
          componentId: 'sc-2cxdc9-0',
        })(['min-height:100vh;height:100%;max-width:1600px;']),
        S = f.c.header.withConfig({
          displayName: 'archive__StyledTitleContainer',
          componentId: 'sc-2cxdc9-1',
        })(['margin-top:200px;', ';'], m.f.tablet(w())),
        j = f.c.h1.withConfig({ displayName: 'archive__StyledTitle', componentId: 'sc-2cxdc9-2' })(
          ['font-size:80px;line-height:1.1;margin:0;', ';', ';', ';', ';'],
          m.f.desktop(y()),
          m.f.tablet(x()),
          m.f.phablet(v()),
          m.f.phone(E()),
        ),
        I = f.c.p.withConfig({
          displayName: 'archive__StyledSubtitle',
          componentId: 'sc-2cxdc9-3',
        })(
          [
            'color:',
            ';margin:0 0 20px 3px;font-size:',
            ';font-family:',
            ';font-weight:normal;',
            ';',
            ';',
          ],
          N.green,
          z.md,
          _.SFMono,
          m.f.desktop(b(), z.sm),
          m.f.tablet(g(), z.smish),
        ),
        O = f.c.div.withConfig({
          displayName: 'archive__StyledTableContainer',
          componentId: 'sc-2cxdc9-4',
        })(['margin:100px -20px;', ';'], m.f.tablet(d())),
        T = f.c.table.withConfig({
          displayName: 'archive__StyledTable',
          componentId: 'sc-2cxdc9-5',
        })(
          [
            'width:100%;border-collapse:collapse;.hide-on-mobile{',
            ';}tbody tr{transition:',
            ';&:hover,&:focus{background-color:',
            ';}}th,td{cursor:default;line-height:1.5;padding:10px 20px;',
            ';}th{text-align:left;}td{&.year{width:10%;',
            ';}&.title{padding-top:15px;color:',
            ';font-size:',
            ';font-weight:700;}&.company{width:15%;padding-top:15px;font-size:',
            ';}&.tech{font-size:',
            ';font-family:',
            ';}&.links{span{',
            ';a + a{margin-left:10px;}svg{width:20px;height:20px;}}}}',
          ],
          m.f.tablet(h()),
          m.h.transition,
          N.lightNavy,
          m.f.tablet(p()),
          m.f.tablet(s(), z.sm),
          N.lightestSlate,
          z.xl,
          z.lg,
          z.xs,
          _.SFMono,
          m.g.flexBetween,
        );
      t.default = function(e) {
        var t = e.location,
          n = e.data.projects.edges,
          f = Object(a.useRef)(null),
          m = Object(a.useRef)(null),
          s = Object(a.useRef)([]);
        return (
          Object(a.useEffect)(function() {
            i.a.reveal(f.current, Object(c.srConfig)()),
              i.a.reveal(m.current, Object(c.srConfig)()),
              s.current.forEach(function(e, t) {
                return i.a.reveal(e, Object(c.srConfig)(10 * t));
              });
          }, []),
          r.a.createElement(
            o.i,
            { location: t },
            r.a.createElement(
              l.Helmet,
              null,
              r.a.createElement('title', null, 'Archive | Brittany Chiang'),
              r.a.createElement('link', {
                rel: 'canonical',
                href: 'https://brittanychiang.com/archive',
              }),
            ),
            r.a.createElement(
              C,
              null,
              r.a.createElement(
                S,
                { ref: f },
                r.a.createElement(j, null, 'Archive'),
                r.a.createElement(I, null, 'A big list of things I’ve worked on'),
              ),
              r.a.createElement(
                O,
                { ref: m },
                r.a.createElement(
                  T,
                  null,
                  r.a.createElement(
                    'thead',
                    null,
                    r.a.createElement(
                      'tr',
                      null,
                      r.a.createElement('th', null, 'Year'),
                      r.a.createElement('th', null, 'Title'),
                      r.a.createElement('th', { className: 'hide-on-mobile' }, 'Made at'),
                      r.a.createElement('th', { className: 'hide-on-mobile' }, 'Built with'),
                      r.a.createElement('th', null, 'Link'),
                    ),
                  ),
                  r.a.createElement(
                    'tbody',
                    null,
                    n.length > 0 &&
                      n.map(function(e, t) {
                        var n = e.node.frontmatter,
                          a = n.date,
                          l = n.github,
                          i = n.external,
                          c = n.title,
                          o = n.tech,
                          f = n.company;
                        return r.a.createElement(
                          'tr',
                          {
                            key: t,
                            ref: function(e) {
                              return (s.current[t] = e);
                            },
                          },
                          r.a.createElement(
                            'td',
                            { className: 'overline year' },
                            '' + new Date(a).getFullYear(),
                          ),
                          r.a.createElement('td', { className: 'title' }, c),
                          r.a.createElement(
                            'td',
                            { className: 'company hide-on-mobile' },
                            f
                              ? r.a.createElement('span', null, f)
                              : r.a.createElement('span', null, '—'),
                          ),
                          r.a.createElement(
                            'td',
                            { className: 'tech hide-on-mobile' },
                            o.length > 0 &&
                              o.map(function(e, t) {
                                return r.a.createElement(
                                  'span',
                                  { key: t },
                                  r.a.createElement('span', { key: t }, e),
                                  t !== o.length - 1 && r.a.createElement('span', null, ' · '),
                                );
                              }),
                          ),
                          r.a.createElement(
                            'td',
                            { className: 'links' },
                            r.a.createElement(
                              'span',
                              null,
                              l
                                ? r.a.createElement(
                                    'a',
                                    {
                                      href: l,
                                      target: '_blank',
                                      rel: 'nofollow noopener noreferrer',
                                      'aria-label': 'GitHub Link',
                                    },
                                    r.a.createElement(u.e, null),
                                  )
                                : r.a.createElement('span', { 'aria-label': 'Empty' }, '—'),
                              i
                                ? r.a.createElement(
                                    'a',
                                    {
                                      href: i,
                                      target: '_blank',
                                      rel: 'nofollow noopener noreferrer',
                                      'aria-label': 'External Link',
                                    },
                                    r.a.createElement(u.c, null),
                                  )
                                : r.a.createElement('span', { 'aria-label': 'Empty' }, '—'),
                            ),
                          ),
                        );
                      }),
                  ),
                ),
              ),
            ),
          )
        );
      };
      var J = '3597720745';
    },
  },
]);
//# sourceMappingURL=component---src-pages-archive-js-f400541804e06d0218a6.js.map
