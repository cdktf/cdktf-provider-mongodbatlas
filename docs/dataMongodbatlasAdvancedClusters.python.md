# `dataMongodbatlasAdvancedClusters` Submodule <a name="`dataMongodbatlasAdvancedClusters` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasAdvancedClusters <a name="DataMongodbatlasAdvancedClusters" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters mongodbatlas_advanced_clusters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  id: str = None,
  use_replication_spec_per_shard: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#project_id DataMongodbatlasAdvancedClusters#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#id DataMongodbatlasAdvancedClusters#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.useReplicationSpecPerShard">use_replication_spec_per_shard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#use_replication_spec_per_shard DataMongodbatlasAdvancedClusters#use_replication_spec_per_shard}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#project_id DataMongodbatlasAdvancedClusters#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#id DataMongodbatlasAdvancedClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `use_replication_spec_per_shard`<sup>Optional</sup> <a name="use_replication_spec_per_shard" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.Initializer.parameter.useReplicationSpecPerShard"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#use_replication_spec_per_shard DataMongodbatlasAdvancedClusters#use_replication_spec_per_shard}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.resetUseReplicationSpecPerShard">reset_use_replication_spec_per_shard</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_use_replication_spec_per_shard` <a name="reset_use_replication_spec_per_shard" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.resetUseReplicationSpecPerShard"></a>

```python
def reset_use_replication_spec_per_shard() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasAdvancedClusters resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasAdvancedClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasAdvancedClusters to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasAdvancedClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasAdvancedClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList">DataMongodbatlasAdvancedClustersResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.useReplicationSpecPerShardInput">use_replication_spec_per_shard_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.useReplicationSpecPerShard">use_replication_spec_per_shard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.results"></a>

```python
results: DataMongodbatlasAdvancedClustersResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList">DataMongodbatlasAdvancedClustersResultsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `use_replication_spec_per_shard_input`<sup>Optional</sup> <a name="use_replication_spec_per_shard_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.useReplicationSpecPerShardInput"></a>

```python
use_replication_spec_per_shard_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `use_replication_spec_per_shard`<sup>Required</sup> <a name="use_replication_spec_per_shard" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.useReplicationSpecPerShard"></a>

```python
use_replication_spec_per_shard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClusters.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasAdvancedClustersConfig <a name="DataMongodbatlasAdvancedClustersConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  id: str = None,
  use_replication_spec_per_shard: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#project_id DataMongodbatlasAdvancedClusters#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#id DataMongodbatlasAdvancedClusters#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.useReplicationSpecPerShard">use_replication_spec_per_shard</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#use_replication_spec_per_shard DataMongodbatlasAdvancedClusters#use_replication_spec_per_shard}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#project_id DataMongodbatlasAdvancedClusters#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#id DataMongodbatlasAdvancedClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `use_replication_spec_per_shard`<sup>Optional</sup> <a name="use_replication_spec_per_shard" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersConfig.property.useReplicationSpecPerShard"></a>

```python
use_replication_spec_per_shard: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.38.0/docs/data-sources/advanced_clusters#use_replication_spec_per_shard DataMongodbatlasAdvancedClusters#use_replication_spec_per_shard}.

---

### DataMongodbatlasAdvancedClustersResults <a name="DataMongodbatlasAdvancedClustersResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResults()
```


### DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration <a name="DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration()
```


### DataMongodbatlasAdvancedClustersResultsBiConnectorConfig <a name="DataMongodbatlasAdvancedClustersResultsBiConnectorConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfig()
```


### DataMongodbatlasAdvancedClustersResultsConnectionStrings <a name="DataMongodbatlasAdvancedClustersResultsConnectionStrings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStrings.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStrings()
```


### DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint()
```


### DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints()
```


### DataMongodbatlasAdvancedClustersResultsLabels <a name="DataMongodbatlasAdvancedClustersResultsLabels" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabels()
```


### DataMongodbatlasAdvancedClustersResultsPinnedFcv <a name="DataMongodbatlasAdvancedClustersResultsPinnedFcv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcv.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcv()
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecs <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecs.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecs()
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs()
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling()
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs()
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling()
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs()
```


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs()
```


### DataMongodbatlasAdvancedClustersResultsTags <a name="DataMongodbatlasAdvancedClustersResultsTags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTags.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList <a name="DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference <a name="DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.changeStreamOptionsPreAndPostImagesExpireAfterSeconds">change_stream_options_pre_and_post_images_expire_after_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.customOpensslCipherConfigTls12">custom_openssl_cipher_config_tls12</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.defaultMaxTimeMs">default_max_time_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.defaultReadConcern">default_read_concern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.defaultWriteConcern">default_write_concern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.failIndexKeyTooLong">fail_index_key_too_long</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.javascriptEnabled">javascript_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol">minimum_enabled_tls_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.noTableScan">no_table_scan</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.oplogMinRetentionHours">oplog_min_retention_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.oplogSizeMb">oplog_size_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector">sample_refresh_interval_bi_connector</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.sampleSizeBiConnector">sample_size_bi_connector</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.tlsCipherConfigMode">tls_cipher_config_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds">transaction_lifetime_limit_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration">DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_stream_options_pre_and_post_images_expire_after_seconds`<sup>Required</sup> <a name="change_stream_options_pre_and_post_images_expire_after_seconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.changeStreamOptionsPreAndPostImagesExpireAfterSeconds"></a>

```python
change_stream_options_pre_and_post_images_expire_after_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_openssl_cipher_config_tls12`<sup>Required</sup> <a name="custom_openssl_cipher_config_tls12" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.customOpensslCipherConfigTls12"></a>

```python
custom_openssl_cipher_config_tls12: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_max_time_ms`<sup>Required</sup> <a name="default_max_time_ms" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.defaultMaxTimeMs"></a>

```python
default_max_time_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_read_concern`<sup>Required</sup> <a name="default_read_concern" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.defaultReadConcern"></a>

```python
default_read_concern: str
```

- *Type:* str

---

##### `default_write_concern`<sup>Required</sup> <a name="default_write_concern" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.defaultWriteConcern"></a>

```python
default_write_concern: str
```

- *Type:* str

---

##### `fail_index_key_too_long`<sup>Required</sup> <a name="fail_index_key_too_long" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.failIndexKeyTooLong"></a>

```python
fail_index_key_too_long: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `javascript_enabled`<sup>Required</sup> <a name="javascript_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.javascriptEnabled"></a>

```python
javascript_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `minimum_enabled_tls_protocol`<sup>Required</sup> <a name="minimum_enabled_tls_protocol" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.minimumEnabledTlsProtocol"></a>

```python
minimum_enabled_tls_protocol: str
```

- *Type:* str

---

##### `no_table_scan`<sup>Required</sup> <a name="no_table_scan" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.noTableScan"></a>

```python
no_table_scan: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `oplog_min_retention_hours`<sup>Required</sup> <a name="oplog_min_retention_hours" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.oplogMinRetentionHours"></a>

```python
oplog_min_retention_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oplog_size_mb`<sup>Required</sup> <a name="oplog_size_mb" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.oplogSizeMb"></a>

```python
oplog_size_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sample_refresh_interval_bi_connector`<sup>Required</sup> <a name="sample_refresh_interval_bi_connector" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.sampleRefreshIntervalBiConnector"></a>

```python
sample_refresh_interval_bi_connector: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sample_size_bi_connector`<sup>Required</sup> <a name="sample_size_bi_connector" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.sampleSizeBiConnector"></a>

```python
sample_size_bi_connector: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_cipher_config_mode`<sup>Required</sup> <a name="tls_cipher_config_mode" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.tlsCipherConfigMode"></a>

```python
tls_cipher_config_mode: str
```

- *Type:* str

---

##### `transaction_lifetime_limit_seconds`<sup>Required</sup> <a name="transaction_lifetime_limit_seconds" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.transactionLifetimeLimitSeconds"></a>

```python
transaction_lifetime_limit_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration">DataMongodbatlasAdvancedClustersResultsAdvancedConfiguration</a>

---


### DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList <a name="DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference <a name="DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.readPreference">read_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfig">DataMongodbatlasAdvancedClustersResultsBiConnectorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `read_preference`<sup>Required</sup> <a name="read_preference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.readPreference"></a>

```python
read_preference: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsBiConnectorConfig
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfig">DataMongodbatlasAdvancedClustersResultsBiConnectorConfig</a>

---


### DataMongodbatlasAdvancedClustersResultsConnectionStringsList <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.private">private</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.privateEndpoint">private_endpoint</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.privateSrv">private_srv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.standard">standard</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.standardSrv">standard_srv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStrings">DataMongodbatlasAdvancedClustersResultsConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private`<sup>Required</sup> <a name="private" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.private"></a>

```python
private: str
```

- *Type:* str

---

##### `private_endpoint`<sup>Required</sup> <a name="private_endpoint" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.privateEndpoint"></a>

```python
private_endpoint: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList</a>

---

##### `private_srv`<sup>Required</sup> <a name="private_srv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.privateSrv"></a>

```python
private_srv: str
```

- *Type:* str

---

##### `standard`<sup>Required</sup> <a name="standard" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.standard"></a>

```python
standard: str
```

- *Type:* str

---

##### `standard_srv`<sup>Required</sup> <a name="standard_srv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.standardSrv"></a>

```python
standard_srv: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsConnectionStrings
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStrings">DataMongodbatlasAdvancedClustersResultsConnectionStrings</a>

---


### DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpoints</a>

---


### DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference <a name="DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString">srv_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString">srv_shard_optimized_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.endpoints"></a>

```python
endpoints: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointEndpointsList</a>

---

##### `srv_connection_string`<sup>Required</sup> <a name="srv_connection_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.srvConnectionString"></a>

```python
srv_connection_string: str
```

- *Type:* str

---

##### `srv_shard_optimized_connection_string`<sup>Required</sup> <a name="srv_shard_optimized_connection_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.srvShardOptimizedConnectionString"></a>

```python
srv_shard_optimized_connection_string: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint">DataMongodbatlasAdvancedClustersResultsConnectionStringsPrivateEndpoint</a>

---


### DataMongodbatlasAdvancedClustersResultsLabelsList <a name="DataMongodbatlasAdvancedClustersResultsLabelsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsLabelsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsLabelsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabels">DataMongodbatlasAdvancedClustersResultsLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsLabels
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabels">DataMongodbatlasAdvancedClustersResultsLabels</a>

---


### DataMongodbatlasAdvancedClustersResultsList <a name="DataMongodbatlasAdvancedClustersResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.advancedConfiguration">advanced_configuration</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList">DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.backupEnabled">backup_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.biConnectorConfig">bi_connector_config</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList">DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.clusterType">cluster_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.configServerManagementMode">config_server_management_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.configServerType">config_server_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.connectionStrings">connection_strings</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList">DataMongodbatlasAdvancedClustersResultsConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.createDate">create_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.encryptionAtRestProvider">encryption_at_rest_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.globalClusterSelfManagedSharding">global_cluster_self_managed_sharding</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList">DataMongodbatlasAdvancedClustersResultsLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.mongoDbMajorVersion">mongo_db_major_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.mongoDbVersion">mongo_db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.paused">paused</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.pinnedFcv">pinned_fcv</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList">DataMongodbatlasAdvancedClustersResultsPinnedFcvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.pitEnabled">pit_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.redactClientLogData">redact_client_log_data</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.replicaSetScalingStrategy">replica_set_scaling_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.replicationSpecs">replication_specs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.rootCertType">root_cert_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.stateName">state_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList">DataMongodbatlasAdvancedClustersResultsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.versionReleaseSystem">version_release_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResults">DataMongodbatlasAdvancedClustersResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_configuration`<sup>Required</sup> <a name="advanced_configuration" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.advancedConfiguration"></a>

```python
advanced_configuration: DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList">DataMongodbatlasAdvancedClustersResultsAdvancedConfigurationList</a>

---

##### `backup_enabled`<sup>Required</sup> <a name="backup_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.backupEnabled"></a>

```python
backup_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bi_connector_config`<sup>Required</sup> <a name="bi_connector_config" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.biConnectorConfig"></a>

```python
bi_connector_config: DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList">DataMongodbatlasAdvancedClustersResultsBiConnectorConfigList</a>

---

##### `cluster_type`<sup>Required</sup> <a name="cluster_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.clusterType"></a>

```python
cluster_type: str
```

- *Type:* str

---

##### `config_server_management_mode`<sup>Required</sup> <a name="config_server_management_mode" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.configServerManagementMode"></a>

```python
config_server_management_mode: str
```

- *Type:* str

---

##### `config_server_type`<sup>Required</sup> <a name="config_server_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.configServerType"></a>

```python
config_server_type: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.connectionStrings"></a>

```python
connection_strings: DataMongodbatlasAdvancedClustersResultsConnectionStringsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsConnectionStringsList">DataMongodbatlasAdvancedClustersResultsConnectionStringsList</a>

---

##### `create_date`<sup>Required</sup> <a name="create_date" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.createDate"></a>

```python
create_date: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encryption_at_rest_provider`<sup>Required</sup> <a name="encryption_at_rest_provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.encryptionAtRestProvider"></a>

```python
encryption_at_rest_provider: str
```

- *Type:* str

---

##### `global_cluster_self_managed_sharding`<sup>Required</sup> <a name="global_cluster_self_managed_sharding" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.globalClusterSelfManagedSharding"></a>

```python
global_cluster_self_managed_sharding: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.labels"></a>

```python
labels: DataMongodbatlasAdvancedClustersResultsLabelsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsLabelsList">DataMongodbatlasAdvancedClustersResultsLabelsList</a>

---

##### `mongo_db_major_version`<sup>Required</sup> <a name="mongo_db_major_version" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.mongoDbMajorVersion"></a>

```python
mongo_db_major_version: str
```

- *Type:* str

---

##### `mongo_db_version`<sup>Required</sup> <a name="mongo_db_version" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.mongoDbVersion"></a>

```python
mongo_db_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.paused"></a>

```python
paused: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `pinned_fcv`<sup>Required</sup> <a name="pinned_fcv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.pinnedFcv"></a>

```python
pinned_fcv: DataMongodbatlasAdvancedClustersResultsPinnedFcvList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList">DataMongodbatlasAdvancedClustersResultsPinnedFcvList</a>

---

##### `pit_enabled`<sup>Required</sup> <a name="pit_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.pitEnabled"></a>

```python
pit_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `redact_client_log_data`<sup>Required</sup> <a name="redact_client_log_data" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.redactClientLogData"></a>

```python
redact_client_log_data: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `replica_set_scaling_strategy`<sup>Required</sup> <a name="replica_set_scaling_strategy" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.replicaSetScalingStrategy"></a>

```python
replica_set_scaling_strategy: str
```

- *Type:* str

---

##### `replication_specs`<sup>Required</sup> <a name="replication_specs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.replicationSpecs"></a>

```python
replication_specs: DataMongodbatlasAdvancedClustersResultsReplicationSpecsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsList</a>

---

##### `root_cert_type`<sup>Required</sup> <a name="root_cert_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.rootCertType"></a>

```python
root_cert_type: str
```

- *Type:* str

---

##### `state_name`<sup>Required</sup> <a name="state_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.stateName"></a>

```python
state_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.tags"></a>

```python
tags: DataMongodbatlasAdvancedClustersResultsTagsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList">DataMongodbatlasAdvancedClustersResultsTagsList</a>

---

##### `termination_protection_enabled`<sup>Required</sup> <a name="termination_protection_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.terminationProtectionEnabled"></a>

```python
termination_protection_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `version_release_system`<sup>Required</sup> <a name="version_release_system" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.versionReleaseSystem"></a>

```python
version_release_system: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResults">DataMongodbatlasAdvancedClustersResults</a>

---


### DataMongodbatlasAdvancedClustersResultsPinnedFcvList <a name="DataMongodbatlasAdvancedClustersResultsPinnedFcvList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference <a name="DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcv">DataMongodbatlasAdvancedClustersResultsPinnedFcv</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcvOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsPinnedFcv
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsPinnedFcv">DataMongodbatlasAdvancedClustersResultsPinnedFcv</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.containerId">container_id</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.numShards">num_shards</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.regionConfigs">region_configs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.zoneName">zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_id`<sup>Required</sup> <a name="container_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.containerId"></a>

```python
container_id: StringMap
```

- *Type:* cdktf.StringMap

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `num_shards`<sup>Required</sup> <a name="num_shards" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.numShards"></a>

```python
num_shards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_configs`<sup>Required</sup> <a name="region_configs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.regionConfigs"></a>

```python
region_configs: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList</a>

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsReplicationSpecs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecs</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabled">compute_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSize">compute_max_instance_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSize">compute_min_instance_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabled">compute_scale_down_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabled">disk_gb_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_enabled`<sup>Required</sup> <a name="compute_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeEnabled"></a>

```python
compute_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `compute_max_instance_size`<sup>Required</sup> <a name="compute_max_instance_size" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMaxInstanceSize"></a>

```python
compute_max_instance_size: str
```

- *Type:* str

---

##### `compute_min_instance_size`<sup>Required</sup> <a name="compute_min_instance_size" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeMinInstanceSize"></a>

```python
compute_min_instance_size: str
```

- *Type:* str

---

##### `compute_scale_down_enabled`<sup>Required</sup> <a name="compute_scale_down_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.computeScaleDownEnabled"></a>

```python
compute_scale_down_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `disk_gb_enabled`<sup>Required</sup> <a name="disk_gb_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.diskGbEnabled"></a>

```python
disk_gb_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScaling</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIops">disk_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeType">ebs_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSize">instance_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_iops`<sup>Required</sup> <a name="disk_iops" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskIops"></a>

```python
disk_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_type`<sup>Required</sup> <a name="ebs_volume_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.ebsVolumeType"></a>

```python
ebs_volume_type: str
```

- *Type:* str

---

##### `instance_size`<sup>Required</sup> <a name="instance_size" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.instanceSize"></a>

```python
instance_size: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecs</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabled">compute_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSize">compute_max_instance_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSize">compute_min_instance_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabled">compute_scale_down_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabled">disk_gb_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_enabled`<sup>Required</sup> <a name="compute_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeEnabled"></a>

```python
compute_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `compute_max_instance_size`<sup>Required</sup> <a name="compute_max_instance_size" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMaxInstanceSize"></a>

```python
compute_max_instance_size: str
```

- *Type:* str

---

##### `compute_min_instance_size`<sup>Required</sup> <a name="compute_min_instance_size" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeMinInstanceSize"></a>

```python
compute_min_instance_size: str
```

- *Type:* str

---

##### `compute_scale_down_enabled`<sup>Required</sup> <a name="compute_scale_down_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.computeScaleDownEnabled"></a>

```python
compute_scale_down_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `disk_gb_enabled`<sup>Required</sup> <a name="disk_gb_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.diskGbEnabled"></a>

```python
disk_gb_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScaling</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIops">disk_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeType">ebs_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSize">instance_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_iops`<sup>Required</sup> <a name="disk_iops" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskIops"></a>

```python
disk_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_type`<sup>Required</sup> <a name="ebs_volume_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.ebsVolumeType"></a>

```python
ebs_volume_type: str
```

- *Type:* str

---

##### `instance_size`<sup>Required</sup> <a name="instance_size" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.instanceSize"></a>

```python
instance_size: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecs</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScaling">analytics_auto_scaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecs">analytics_specs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.autoScaling">auto_scaling</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.backingProviderName">backing_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.electableSpecs">electable_specs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecs">read_only_specs</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analytics_auto_scaling`<sup>Required</sup> <a name="analytics_auto_scaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.analyticsAutoScaling"></a>

```python
analytics_auto_scaling: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsAutoScalingList</a>

---

##### `analytics_specs`<sup>Required</sup> <a name="analytics_specs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.analyticsSpecs"></a>

```python
analytics_specs: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAnalyticsSpecsList</a>

---

##### `auto_scaling`<sup>Required</sup> <a name="auto_scaling" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.autoScaling"></a>

```python
auto_scaling: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsAutoScalingList</a>

---

##### `backing_provider_name`<sup>Required</sup> <a name="backing_provider_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.backingProviderName"></a>

```python
backing_provider_name: str
```

- *Type:* str

---

##### `electable_specs`<sup>Required</sup> <a name="electable_specs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.electableSpecs"></a>

```python
electable_specs: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsElectableSpecsList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `read_only_specs`<sup>Required</sup> <a name="read_only_specs" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.readOnlySpecs"></a>

```python
read_only_specs: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList</a>

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigs</a>

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIops">disk_iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeType">ebs_volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSize">instance_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_iops`<sup>Required</sup> <a name="disk_iops" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskIops"></a>

```python
disk_iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_volume_type`<sup>Required</sup> <a name="ebs_volume_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.ebsVolumeType"></a>

```python
ebs_volume_type: str
```

- *Type:* str

---

##### `instance_size`<sup>Required</sup> <a name="instance_size" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.instanceSize"></a>

```python
instance_size: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs">DataMongodbatlasAdvancedClustersResultsReplicationSpecsRegionConfigsReadOnlySpecs</a>

---


### DataMongodbatlasAdvancedClustersResultsTagsList <a name="DataMongodbatlasAdvancedClustersResultsTagsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasAdvancedClustersResultsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasAdvancedClustersResultsTagsOutputReference <a name="DataMongodbatlasAdvancedClustersResultsTagsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_advanced_clusters

dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTags">DataMongodbatlasAdvancedClustersResultsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasAdvancedClustersResultsTags
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasAdvancedClusters.DataMongodbatlasAdvancedClustersResultsTags">DataMongodbatlasAdvancedClustersResultsTags</a>

---



