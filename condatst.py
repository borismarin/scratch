import os
from subprocess import check_output as co
import conda-api


engine = os.environ.get('OMV_ENGINE')
if 'genesis' in engine:
    conda_api.install('hdf5')

print co('conda list')


  