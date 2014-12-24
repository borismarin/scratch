import os
from subprocess import check_output as co
import conda_api


engine = os.environ.get('OMV_ENGINE')
if 'genesis' in engine:
    conda_api.set_root_prefix()
    conda_api.install(('hdf5'))
    

  
