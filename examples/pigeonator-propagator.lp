%%% Tab: pigeonator.py
#script(python)
from clingo.propagate import Assignment, Propagator, PropagateInit, PropagateControl

class Pigeonator(Propagator):
    def __init__(self):
        super().__init__()
        self.place = {}
        self.states = {}

    def init(self, assignment: Assignment, init: PropagateInit):
        for symbol, atom in init.base[("place", 2)].items():
            lit = init.solver_literal(atom.literal)
            # store hole H of each place(P,H) atom
            self.place[lit] = atom.symbol.arguments[1].number
            init.add_watch(lit)
        for i in range(init.number_of_threads):
            self.states[i] = {}

    def propagate(self, assignment: Assignment, control: PropagateControl, changes):
        state = self.states[assignment.thread_id]
        for lit in changes:
            hole = self.place[lit]
            prev = state.setdefault(hole, lit)
            if prev != lit and not control.add_nogood([lit, prev]):
                return

    def undo(self, assignment: Assignment, changes):
        state = self.states[assignment.thread_id]
        for lit in changes:
            hole = self.place[lit]
            if state.get(hole, 0) == lit:
                del state[hole]

def main(lib, prg):
    prg.register_propagator(Pigeonator())
    prg.main()

#end.
%%% Tab: encoding.lp
#const h = 5.
#const p = h+1.

1 { place(P,H) : H = 1..h } 1 :- P = 1..p.
% { place(P,H) : P = 1..p } 1 :- H = 1..h.
